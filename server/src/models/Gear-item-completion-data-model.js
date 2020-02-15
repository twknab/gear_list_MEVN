const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// Setup a schema:
const GearItemCompletionDataSchema = new Schema(
  {
    gearItem: {
      type: Schema.Types.ObjectId,
      ref: "GearItem",
      required: true
    },
    gearList: {
      type: Schema.Types.ObjectId,
      ref: "GearList",
      unique: true,
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

GearItemCompletionDataSchema.methods.getOrCreateItemCompletionData = function(
  listAndItems,
  gearListId,
  callback
) {
  // map list items id to eval for completion
  let items = listAndItems.items;
  let itemIds = items.map(item => item._id);
  // get gear completion data for existing items:
  GearItemCompletionData.find({
    gearItem: { $in: itemIds },
    gearList: gearListId
  })
    .then(itemCompletionData => {
      // map item ids with completion data into array
      let itemsWithData = itemCompletionData.map(completionData =>
        String(completionData.gearItem)
      );
      // loop through list items, check if needs completion data
      let itemsNeedingUpdate = [];
      itemIds.forEach(itemId => {
        if (!itemsWithData.includes(String(itemId))) {
          itemsNeedingUpdate.push(itemId);
        }
      });
      // prepare new items for item completion data creation
      const itemCompletionDataNeedingCreating = itemsNeedingUpdate.map(
        itemMissingData => ({
          gearItem: mongoose.Types.ObjectId(itemMissingData),
          gearList: mongoose.Types.ObjectId(gearListId)
        })
      );
      // create item completion data
      GearItemCompletionData.create(itemCompletionDataNeedingCreating)
        .then(() => {
          GearItemCompletionDataSchema.methods.getCompletionDataAndItems(
            itemIds,
            gearListId,
            callback
          );
        })
        .catch(err => {
          console.log(err);
          throw "Error creating item completion data";
        });
    })
    .catch(() => {
      throw "Error retrieving item completion data";
    });
};

GearItemCompletionDataSchema.methods.getCompletionDataAndItems = function(
  itemIds,
  gearListId,
  callback
) {
  GearItemCompletionData.find({
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
const GearItemCompletionData = mongoose.model(
  "GearItemCompletionData",
  GearItemCompletionDataSchema
);
module.exports = GearItemCompletionData;
