const fs = require("fs");
const path = require("path");
const router = require("express").Router();
/* as initial state uses localStorage from window which is not available on server so just mocking same*/
if (typeof window === 'undefined') {
  global.window = {
    localStorage:{
      getItem:()=>('{}')
    }
  };
}


const { renderToNodeStream } = require("react-dom/server");
const React = require("react");
const ReactApp = require("../build/static/ssr/main").default;
const {StaticRouter} = require('react-router-dom');
const configureStore =  require("../build/static/ssr/configureStore").default;
const initialState =  require("../build/static/ssr/initialState").default;
const {Provider} = require('react-redux');




const STWW = "Something went wrong";

router.get('*.js', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  res.set('Service-Worker-Allowed','/');
  next();
});

router.get('*.css', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
});

router.get(/\.(png|gz|ico|json|txt|map)$/i, function (req, res) {
  const indexFile = path.resolve('./build'+req.url);
  res.sendFile(indexFile);
});

router.get("/*", (req, res) => {
  var fileName = path.join(__dirname, "../build", "index.html");
  const context = {};
  const store = configureStore(initialState);
  // Get a copy of store data to create the same store on client side
  const preloadedState = store.getState();
  fs.readFile(fileName, "utf8", (err, file) => {
    if (err) {
      console.error(STWW+':', err);
      return res.status(500).send(STWW+'!');
    }
    const reactElement = React.createElement(Provider, {
      store: store
    }, React.createElement(StaticRouter, {
      location: req.url,
      context: context
    }, React.createElement(ReactApp,{preloadedState})));
    const [head, tail] = file.split("{ssr-react-app-space}");
    res.write(head);
    const stream = renderToNodeStream(reactElement);
    stream.pipe(res, { end: false });
    stream.on("end", () => {
      res.write(tail);
      res.end();
    });
  });
});

module.exports = router;
