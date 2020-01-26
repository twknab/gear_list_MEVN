const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// Setup a schema:
const GearItemCompletionSchema = new Schema(
  {
    gearItemId: {
      type: Schema.Types.ObjectId,
      ref: "gearItem",
      unique: true,
      required: true
    },
    gearListId: {
      type: Schema.Types.ObjectId,
      ref: "gearList",
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

GearItemCompletionSchema.methods.checkListItemsForCompletion = function(
  listAndItems,
  gearListId,
  callback
) {
  console.log("Model talking here ...checking gear item completions...");
  let items = listAndItems.items;
  // collect item IDs only (so we can check if any of them are missing listItemCompletion data)
  let itemIds = items.map(item => item._id);
  console.log("=== GEAR ITEMS MAPPED ID ARRAY ====");
  console.log(itemIds);
  // Fetch all gearItemCompletion documents for the item IDs
  GearItemCompletion.find({ gearItemId: { $in: itemIds } })
    .then(gearItemCompletions => {
      console.log("=== COMPLETION RECORDS FOUND ====");
      console.log(gearItemCompletions);
      // If none exist, create them for each
      if (gearItemCompletions.length === 0) {
        console.log("NONE FOUND");
        const gearItemCompletionData = itemIds.map(itemId => ({
          gearItemId: mongoose.Types.ObjectId(itemId),
          gearListId: mongoose.Types.ObjectId(gearListId)
        }));
        GearItemCompletion.insertMany(gearItemCompletionData)
          .then(createdCompletionItems => {
            console.log("=== MANY CREATED ====");
            console.log(createdCompletionItems);
            // TODO:
            // map created completion to listAndItems.items completed
            // And run callback
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        //=========================================
        // TODO : COULDNT YOU JUST UPSERT HERE?
        // E.G ADD NON EXISTING RECORDS AND SKIP IF EXISTING?
        // ALL LOGIC BELOW IS TOO COMPLEX / EXPENSIVE
        //==========================================
        // diff the records that exist vs the ones that don't
        let gearItemsAlreadyWithCompletionData = gearItemCompletions.map(
          completionData => completionData.gearItemId
        );
        console.log("=== ITEMS ALREADY WITH COMPLETION DATA ====");
        console.log(gearItemsAlreadyWithCompletionData);
        let gearItemsNeedingCompletionData = [];
        itemIds.forEach(itemId => {
          gearItemsAlreadyWithCompletionData.forEach(completionDataItemId => {
            if (String(completionDataItemId) != String(itemId)) {
              gearItemsNeedingCompletionData.push(itemId);
            }
          });
        });
        console.log("=== GEAR ITEMS YET NEEDING COMPLETION ===");
        console.log(gearItemsNeedingCompletionData);
        const gearItemCompletionData = gearItemsNeedingCompletionData.map(
          itemId => ({
            gearItemId: mongoose.Types.ObjectId(itemId),
            gearListId: mongoose.Types.ObjectId(gearListId)
          })
        );
        GearItemCompletion.insertMany(gearItemCompletionData)
          .then(createdCompletionItems => {
            console.log("=== MANY CREATED ====");
            console.log(createdCompletionItems);
            // TODO FINISH WHAT YOU STARTED HERE...NOW MAP COMPLETION DATA TO ITEMS AND SEND BACK
            // TODO:
            // map created completion to listAndItems.items completed
          })
          .catch(err => {
            console.log("=== ERROR INSERTING DIFF ====");
            console.log(err);
          });
      }
    })
    .catch(err => {
      console.log(err);
    });
  // WHAT I WANT TO DO PSUEDOCODE
  // get all GearItemCompletion documents for _ids in items
  // map those completed fields to item completed fields
  // run callback function passing in items completed now mapped

  // for (let i = 0; i < items.length; i++) {
  //   console.log("ITEM: ", items[i]);
  //   console.log("complete count:", completed);
  //   GearItemCompletion.findOne({ _id: items[i]._id })
  //     .then(completionObject => {
  //       if (completionObject === null) {
  //         GearItemCompletion.create({
  //           gearListId: gearListId,
  //           gearItemId: items[i]._id
  //         })
  //           .then(completionObject => {
  //             console.log("JUST CREATED NEW COMPLETION OBJECT");
  //             listAndItems.items[i].completed = completionObject.completed;
  //             completed++;
  //             console.log(completed);
  //             console.log(items.length);
  //           })
  //           .catch(error => {
  //             console.log("ERROR CREATING COMPLETION OBJECT");
  //             console.log(error);
  //             callback();
  //           });
  //       } else {
  //         listAndItems.items[i].completed = completionObject.completed;
  //         console.log("FOUND COMPLETION STATUS");
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       callback();
  //     });
  //   console.log("done looping");
  //   if (completed === items.length) {
  //     console.log("FINISHED LIST AND ITMES:", listAndItems);
  //     callback(listAndItems);
  //   }
  // }
};

// Invoke our model using our schema and export
const GearItemCompletion = mongoose.model(
  "GearItemCompletion",
  GearItemCompletionSchema
);
module.exports = GearItemCompletion;
