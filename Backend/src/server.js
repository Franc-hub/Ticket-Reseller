const express = require("express");
const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const jwt = require("express-jwt");
require("dotenv").config();
const config = require("./config.js");
const path = require("path");
global.appRoot = path.resolve(__dirname);

const app = express();
const jwtProtection = jwt({
    secret: process.env.TOKEN_SECRET,
    algorithms: ["HS256"],
});



app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("."));

app.disable("x-powered-by");

//  test 

app.get('/', function (req, res) {
    res.status(200).send('Hello World!');
  }
  
const start = async () => {
    try {
        app.listen(config.port, () => {
            console.log(`REST API on http://localhost:${config.port}`);
        });

    } catch (e) {
        console.error(e);
    }
};



module.exports = {
    start,
    app,
};