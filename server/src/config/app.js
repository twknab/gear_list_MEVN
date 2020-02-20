/*
This is the configuration file for the general app settings for the server-side of GearList.
*/
// Import our dependencies
const express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path"),
  morgan = require("morgan"),
  session = require("express-session"),
  creds = require("./credentials/credentials"),
  cors = require("cors");

module.exports = app => {
  // Setup our session and cookie info
  const sess = {
    secret: creds.sessionSecret,
    resave: false,
    saveUninitialized: true,
    name: "gearListCookie",
    cookie: {
      secure: false, // change this for production
      httpOnly: false,
      maxAge: 3600000
    }
  };

  const corsOptions = {
    origin: "http://10.0.0.130:8080",
    credentials: true
  };

  // Setup our express and nodejs application:
  app
    // gives server access to src folder where Vue.js application lives
    .use(express.static(path.join(__dirname, "../../../src")))

    // run morgan to help with routing console logging
    .use(morgan("dev"))

    // load up express-session
    .use(session(sess))

    // run cors
    .use(cors(corsOptions))

    // run bodyParser to parse form data
    .use(bodyParser.json());
};
