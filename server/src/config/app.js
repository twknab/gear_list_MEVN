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
  helmet = require("helmet"),
  history = require("connect-history-api-fallback"),
  cors = require("cors");

module.exports = app => {
  // Setup our session and cookie info
  const sess = {
    secret: creds.sessionSecret,
    resave: false,
    saveUninitialized: true,
    name: "gearListCookie",
    cookie: {
      secure: false, // TODO: Fix this -- change to true for production -- breaks things right now
      httpOnly: false,
      maxAge: 3600000
    }
  };

  const corsOptions = {
    origin: [
      "http://localhost:8080",
      "http://10.0.0130:8080",
      "https://localhost:8080",
      "http://www.google.com",
      "http://54.245.71.245/"
    ],
    credentials: true
  };

  // Set as production
  // NOTE: Comment this out if working on dev server otherwise will read from built files
  // NOTE: KNOWN bug where refreshing in dev will break view. Needs client side routing fix -- you fixed this for prod but need to remember what you did :X cLowNTowN
  // process.env.NODE_ENV = "production";

  const isProduction = process.env.NODE_ENV === "production" || false;
  if (isProduction) {
    // Load prod environment
    app.use(history());
    app.use(express.static(path.join(__dirname, "../../public")));
  } else {
    // Load dev environment
    app.use(
      history({
        verbose: true
      })
    );
    app.use(express.static(path.join(__dirname, "../../../src")));
  }

  // Setup our express and nodejs application:
  app
    // run morgan to help with routing console logging
    .use(morgan("dev"))

    // load up express-session
    .use(session(sess))

    // helmet for extra prod security for requests https://helmetjs.github.io/
    .use(helmet())

    // run cors
    .use(cors(corsOptions))

    // run bodyParser to parse form data
    .use(bodyParser.json());
};
