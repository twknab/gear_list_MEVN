let express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  path = require("path"),
  port = 8000;

// App Config
require("./config/app")(app);

// Database Config
require("./config/db");

// Setup Routes

// Setup Server

console.log("...server message...");
