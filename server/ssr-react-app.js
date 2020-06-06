const fs = require("fs");
const path = require("path");
const router = require("express").Router();

const { renderToNodeStream } = require("react-dom/server");
const React = require("react");
const ReactApp = require("../build/static/ssr/main").default;
const {StaticRouter} = require('react-router-dom');

console.log(ReactApp);


// router.get("/static/*",(req,res)=>{
//   var staticPath = /static(.*)/.exec(req.url);
//   const indexFile = path.resolve('./build/'+staticPath[0]);
//   fs.readFile(indexFile, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Something went wrong:', err);
//       return res.status(500).send('Oops, better luck next time!');
//     }
//     return res.send(
//         data
//     );
//   });
// });

const STWW = "Something went wrong";


router.get("/*", (req, res) => {
  const spiltPathArray  = req.url.split('/');
  const canBeAFile = spiltPathArray[spiltPathArray.length - 1];
  if(canBeAFile.includes('.')){
    const indexFile = path.resolve('./build'+req.url);
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error(STWW+':', err);
        return res.status(500).send(STWW+'!');
      }
      res.write( data );
      return res.end();
    });
  } else {
    var fileName = path.join(__dirname, "../build", "index.html");
    const context = {};
    fs.readFile(fileName, "utf8", (err, file) => {
      if (err) {
        console.error(STWW+':', err);
        return res.status(500).send(STWW+'!');
      }
      const reactElement = React.createElement(StaticRouter,{location:req.url,context:context},React.createElement(ReactApp));
      const [head, tail] = file.split("{ssr-react-app-space}");
      res.write(head);
      const stream = renderToNodeStream(reactElement);
      stream.pipe(res, { end: false });
      stream.on("end", () => {
        res.write(tail);
        res.end();
      });
    });
  }
});

module.exports = router;
