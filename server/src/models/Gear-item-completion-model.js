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

GearItemCompletionSchema.methods.makeItemCompletionData = function(
  listAndItems,
  gearListId,
  callback
) {
  console.log("Model talking here ...");
  let items = listAndItems.items;
  // extract item ids and map to object which we'll use for updating
  let itemIds = items.map(item => item._id);
  // get GearItemCompletions for existing items:
  GearItemCompletion.find({ gearItem: { $in: itemIds }, gearList: gearListId })
    .then(itemCompletionData => {
      console.log("here are completions found----");
      console.log(itemCompletionData);
      let itemsWithData = itemCompletionData.map(completionData =>
        String(completionData.gearItem)
      );
      console.log("here are the IDs with existing data----");
      console.log(itemsWithData);
      let itemsNeedingUpdate = [];
      itemIds.forEach(itemId => {
        if (!itemsWithData.includes(String(itemId))) {
          itemsNeedingUpdate.push(itemId);
        }
      });
      console.log("here's the items needing completion data creation---");
      console.log(itemsNeedingUpdate);
      // prepare data for item completion data creation
      const itemCompletionDataNeedingCreating = itemsNeedingUpdate.map(
        itemMissingData => ({
          gearItem: mongoose.Types.ObjectId(itemMissingData),
          gearList: mongoose.Types.ObjectId(gearListId)
        })
      );
      console.log("Here's the data we about to create...");
      console.log(itemCompletionDataNeedingCreating);
      // create data
      GearItemCompletion.create(itemCompletionDataNeedingCreating)
        .then(result => {
          console.log("RESULT OF INSERT MANY=====");
          console.log(result);
          // TODO:
          // SEE getCompletionDataAndItems
          // Get all gearcompletion data and populate the tiem...send this back to frontend...then setup your completion logic...blegg
        })
        .catch(err => {
          console.log("ERR WHEN ATTEMPING INSERT MANY...");
          console.log(err);
        });
    })
    .catch(err => console.log("error fetching gear item completions", err));
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
      console.log("🎉🎉🎉🎉🎉");
      console.log("Found all item completion data for this list..");
      console.log(listItemCompletionDataAndItem);
      callback(listItemCompletionDataAndItem);
    })
    .catch(err => {
      console.log("AN ERROR OCCURRED....>>>");
      console.log(err);
      callback(err);
    });
};

// Invoke our model using our schema and export
const GearItemCompletion = mongoose.model(
  "GearItemCompletion",
  GearItemCompletionSchema
);
module.exports = GearItemCompletion;
