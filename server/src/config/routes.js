// Load Controllers:
var MainController = require("./../controllers/main-controller");

// Server-Side Routes:
module.exports = function(app) {
  console.log("Server side routes loaded...");
  app.get("/", MainController.index);
};
