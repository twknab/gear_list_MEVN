/*
This is the configuration file for the general app settings for the server-side of GearList.
*/

// Import our dependencies
import credentials from "./credentials/credentials.js";

const express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path"),
  morgan = require("morgan"),
  session = require("express-session"),
  cors = require("cors");

const sess = {
  secret: credentials.sessionSecret,
  resave: false,
  saveUninitialized: true,
  name: "gearListCookie",
  cookie: {
    secure: false, // change this for production
    httpOnly: false,
    maxAge: 3600000
};

module.exports = app => {
  // Setup our express and nodejs application:
  app
    // gives server access to src folder where Vue.js application lives
    .use(express.static(path.join(__dirname, "../../../src")))

    // run morgan to help with routing console logging
    .use(morgan("dev"))

    // load up express-session
    .use(session(sess))

    // run cors
    .use(cors())

    // run bodyParser to parse form data
    .use(bodyParser.json());
};
