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
require("./config/routes")(app);

// Setup Server
app.listen(port, function() {
  console.log("Server listening on port:", port);
});

console.log("...server message...");
