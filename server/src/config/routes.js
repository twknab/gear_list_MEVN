// These are server-side routes, if you want to see the client side routing that handles the SPA views, see `~/src/router.js` within Vue (uses Vue Router)

// Load Controllers:
const UserController = require("./../controllers/user-controller"),
  GearItemController = require("./../controllers/gear-item-controller"),
  GearListController = require("./../controllers/gear-list-controller");

// Server-Side Routes:
module.exports = function(app) {
  console.log("⚙️  Server side routes loaded...");
  // Create a new user
  app.post("/user", UserController.createUser);
  // Get existing user:
  app.get("/user", UserController.getLoggedInById);
  // Login a user
  app.post("/user/login", UserController.loginUser);
  app.get("/user/logout", UserController.logout);
  // Create a new gear item
  app.post("/gear-item", GearItemController.createGearItem);
  // Get gear item
  app.get("/gear-item/find-item", GearItemController.getGearItem);
  // Get all user's gear items
  app.get("/gear-item", GearItemController.getUserGearItems);
  // Delete gear item
  app.get("/gear-item/delete", GearItemController.deleteGearItem);
  // Mark item as complete or incomplete
  app.get("/gear-item/complete", GearItemController.changeCompleteStatus);
  // Update gear item
  app.post("/gear-item/update", GearItemController.updateGearItem);
  // Create a new gear list
  app.post("/gear-list", GearListController.createGearList);
  // Get all user's gear lists
  app.get("/gear-list", GearListController.getUserGearLists);
  // Add/remove one gear item to many gear lists
  app.post("/gear-list/attach", GearListController.attachOneItemToManyLists);
  // Add/remove many gear items from one gear list
  app.post(
    "/gear-list/attach/many-items",
    GearListController.attachManyItemsToSingleList
  );
  // Get gear lists belonging to gear item
  app.get(
    "/gear-list/find-item",
    GearListController.getGearListsBelongingToItem
  );
  // Get gear list and all items
  app.get("/gear-list/find-list", GearListController.getGearListAndAllItems);
  // Get all gear item completions and item information
  app.post(
    "/gear-list/find-list",
    GearListController.getGearListAndAllItemCompletions
  );
  // Update gear list
  app.post("/gear-list/update", GearListController.updateGearList);
  // Remove item from gear list
  app.post("/gear-list/remove/item", GearListController.removeGearItemFromList);
  // Delete gear list
  app.get("/gear-list/delete", GearListController.deleteGearList);
};
