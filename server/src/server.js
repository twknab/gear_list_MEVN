const express = require("express"),
  app = express(),
  PORT = 8000;

// App Config
require("./config/app")(app);

// Database Config
require("./config/db");

// Server-Side Routing Config
require("./config/routes")(app); // server routes go in this file

// Run Server on Port
app.listen(PORT, () => {
  console.log("Server listening on port:", PORT);
});
