
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const logger = require("morgan");
const history = require('connect-history-api-fallback');



const staticFileMiddleware = express.static(path.join(__dirname, "./client/dist"));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname, "./client/dist"));
});

app.use(express.static(path.join(__dirname, "./client/dist")));
console.log(process.env.password)

app.set("port", process.env.PORT || 80);

app.listen(app.get("port"),()=>{
    console.log(`Server is running on port ${app.get("port")}`);
});