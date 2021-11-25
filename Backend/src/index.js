const { start } = require("./server");
var path = require("path");
const mongo = require("./config/mongo");
global.appRoot = path.resolve(__dirname);
const mongo = require("./config/mongo");


start();
