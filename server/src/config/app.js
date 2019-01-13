/*
This is the configuration file for the general app settings for the server-side of GearList.
*/

// Import our dependencies
let express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path"),
  morgan = require("morgan");

module.exports = app => {
  // Setup our express and nodejs application:
  app
    // gives server access to src folder where Vue.js application lives
    .use(express.static(path.join(__dirname, "../../../src")))

    // run morgan to help with routing console logging
    .use(morgan("dev"))

    // run bodyParser to parse form data
    .use(bodyParser.json());
};
