const path = require("path");
const express = require("express");
const serveStatic = require("serve-static");
const reactApp = require("./ssr-react-app");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(reactApp);
app.use(serveStatic(path.join(__dirname, "../build")));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
