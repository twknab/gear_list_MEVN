// Load Controllers:
var GearListController = require("./../controllers/gear-list-controller");

// Server-Side Routes:
module.exports = function(app) {
  console.log("Server side routes loaded...");
  app.get("/", GearListController.index);
};
