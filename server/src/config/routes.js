// These are server-side routes, if you want to see the client side routing that handles the SPA views, see `~/src/router.js` within Vue (uses Vue Router)

// Load Controllers:
const MainController = require("./../controllers/main-controller"),
  UserController = require("./../controllers/user-controller"),
  GearItemController = require("./../controllers/gear-item-controller"),
  GearListController = require("./../controllers/gear-list-controller");

// Server-Side Routes:
module.exports = function(app) {
  console.log("⚙️  Server side routes loaded...");
  app.get("/", MainController.index);
  // Create a new user
  app.post("/user", UserController.createUser);
  // Get existing user:
  app.get("/user", UserController.getLoggedInById);
  // Login a user
  app.post("/user/login", UserController.loginUser);
  app.get("/user/logout", UserController.logout);
  // Create a new gear item
  app.post("/gear-item", GearItemController.createGearItem);
  // Get all user's gear items
  app.get("/gear-item", GearItemController.getUserGearItems);
  // Create a new gear list
  app.post("/gear-list", GearListController.createGearList);
  // Get all user's gear lists
  app.get("/gear-list", GearListController.getUserGearLists);
  // Add gear item to gear lists
  app.post("/gear-list/add-item", GearListController.addItemToGearLists);
};
