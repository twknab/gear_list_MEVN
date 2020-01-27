const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// Setup a schema:
const GearItemCompletionSchema = new Schema(
  {
    gearItem: {
      type: Schema.Types.ObjectId,
      ref: "GearItem",
      unique: true,
      required: true
    },
    gearList: {
      type: Schema.Types.ObjectId,
      ref: "GearList",
      required: true
    },
    completed: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
);

// // These functions run prior to document validation
// GearItemCompletionSchema.pre("validate", function(next) {
//   console.log("Do something before validation here..");
//   next();
// });

// // These functions run prior to document save()
// GearItemCompletionSchema.pre("save", function(next) {
//   console.log("Do something before save here...");
//   next();
// });

GearItemCompletionSchema.methods.getOrCreateItemCompletionData = function(
  listAndItems,
  gearListId,
  callback
) {
  let items = listAndItems.items;
  // extract item ids and map to object which we'll use for updating
  let itemIds = items.map(item => item._id);
  // get GearItemCompletions for existing items:
  GearItemCompletion.find({ gearItem: { $in: itemIds }, gearList: gearListId })
    .then(itemCompletionData => {
      let itemsWithData = itemCompletionData.map(completionData =>
        String(completionData.gearItem)
      );
      let itemsNeedingUpdate = [];
      itemIds.forEach(itemId => {
        if (!itemsWithData.includes(String(itemId))) {
          itemsNeedingUpdate.push(itemId);
        }
      });
      // prepare data for item completion data creation
      const itemCompletionDataNeedingCreating = itemsNeedingUpdate.map(
        itemMissingData => ({
          gearItem: mongoose.Types.ObjectId(itemMissingData),
          gearList: mongoose.Types.ObjectId(gearListId)
        })
      );
      // create data
      GearItemCompletion.create(itemCompletionDataNeedingCreating)
        .then(result => {
          GearItemCompletionSchema.methods.getCompletionDataAndItems(
            itemIds,
            gearListId,
            callback
          );
        })
        .catch(() => {
          throw "Error creating item completion data";
        });
    })
    .catch(() => {
      throw "Error retrieving item completion data";
    });
};

GearItemCompletionSchema.methods.getCompletionDataAndItems = function(
  itemIds,
  gearListId,
  callback
) {
  GearItemCompletion.find({
    gearItem: { $in: itemIds },
    gearList: gearListId
  })
    .populate("gearItem")
    .exec()
    .then(listItemCompletionDataAndItem => {
      callback({
        success: true,
        items: listItemCompletionDataAndItem
      });
    })
    .catch(err => {
      callback({ success: false, error: err });
    });
};

// Invoke our model using our schema and export
const GearItemCompletion = mongoose.model(
  "GearItemCompletion",
  GearItemCompletionSchema
);
module.exports = GearItemCompletion;
