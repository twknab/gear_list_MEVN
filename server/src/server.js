const express = require("express"),
  app = express(),
  PORT = 8000,
  credentials = require("./config/credentials/credentials");

// App Config
require("./config/app")(app, credentials);

// Database Config
require("./config/db");

// Server-Side Routing Config
require("./config/routes")(app); // server routes go in this file

// Run Server on Port
app.listen(PORT, "0.0.0.0", () => {
  console.log("🛸  Server running on port:", PORT);
});
