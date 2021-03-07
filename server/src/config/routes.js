// These are server-side routes, if you want to see the client side routing that handles the SPA views, see `~/src/router.js` within Vue (uses Vue Router)

// Load Controllers:
const UserController = require("./../controllers/user-controller"),
  HomepageController = require("./../controllers/homepage-controller"),
  GearItemController = require("./../controllers/gear-item-controller"),
  GearItemCategoryController = require("./../controllers/gear-item-category-controller"),
  GearListController = require("./../controllers/gear-list-controller");
// Server-Side Routes:
module.exports = function(app) {
  console.log("⚙️  Server side routes loaded...");

  // Contact form (Homepage, not logged-in)
  app.post("/api/contact", HomepageController.sendContactFormDataByEmail);

  /*****
  USER
  *****/
  // Create a new user
  app.post("/api/user", UserController.createUser);
  // Get existing user:
  app.get("/api/user", UserController.getLoggedInById);
  // Login a user
  app.post("/api/user/login", UserController.loginUser);
  app.get("/api/user/logout", UserController.logout);

  /*****
  GEAR ITEM
  *****/
  // Create a new gear item
  app.post("/api/gear-item", GearItemController.createGearItem);
  // Get gear item
  app.get("/api/gear-item/find-item", GearItemController.getGearItem);
  // Get all user's gear items
  app.get("/api/gear-item", GearItemController.getUserGearItems);
  // Delete gear item
  app.get("/api/gear-item/delete", GearItemController.deleteGearItem);
  // Mark item as complete or incomplete
  app.get("/api/gear-item/complete", GearItemController.changeCompleteStatus);
  // Update gear item
  app.post("/api/gear-item/update", GearItemController.updateGearItem);

  /*****
  GEAR ITEM CATEGORY
  *****/
  // Create a new gear item category
  app.post(
    "/api/gear-item-category",
    GearItemCategoryController.createGearItemCategory
  );
  // Get gear item category
  app.get(
    "/api/gear-item-category/find-item-category",
    GearItemCategoryController.getGearItemCategory
  );
  // Get all user's gear item categories
  app.get(
    "/api/gear-item-category",
    GearItemCategoryController.getUserGearItemCategories
  );
  // Delete gear item category
  app.get(
    "/api/gear-item-category/delete",
    GearItemCategoryController.deleteGearItemCategory
  );
  // Update gear item category
  app.post(
    "/api/gear-item-category/update",
    GearItemCategoryController.updateGearItemCategory
  );

  /*****
  GEAR LIST
  *****/
  // Create a new gear list
  app.post("/api/gear-list", GearListController.createGearList);
  // Get all user's gear lists
  app.get("/api/gear-list", GearListController.getUserGearLists);
  // Add/remove one gear item to many gear lists
  app.post(
    "/api/gear-list/attach",
    GearListController.attachOneItemToManyLists
  );
  // Add/remove many gear items from one gear list
  app.post(
    "/api/gear-list/attach/many-items",
    GearListController.attachManyItemsToSingleList
  );
  // Get gear lists belonging to gear item
  app.get(
    "/api/gear-list/find-item",
    GearListController.getGearListsBelongingToItem
  );
  // Get gear list and all items
  app.get(
    "/api/gear-list/find-list",
    GearListController.getGearListAndAllItems
  );
  // Get all gear item completions and item information
  app.post(
    "/api/gear-list/find-list",
    GearListController.getGearListAndAllItemCompletions
  );
  // Update gear list
  app.post("/api/gear-list/update", GearListController.updateGearList);
  // Remove item from gear list
  app.post(
    "/api/gear-list/remove/item",
    GearListController.removeGearItemFromList
  );
  // Delete gear list
  app.get("/api/gear-list/delete", GearListController.deleteGearList);
};
