const { start } = require("./server");
var path = require("path");
global.appRoot = path.resolve(__dirname);
const mongo = require("./config/mongo");


start();
