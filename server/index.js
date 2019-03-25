
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const logger = require("morgan");
var connect = require('connect');
var serveStatic = require('serve-static');



app.set("port", process.env.PORT || 8001);



connect().use(serveStatic(path.join(__dirname, "../client/dist"))).listen(app.get("port"), function(){
    console.log(`Server is running on port ${app.get("port")}`);
});
