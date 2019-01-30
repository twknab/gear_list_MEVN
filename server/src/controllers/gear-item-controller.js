const GearItem = require("mongoose").model("GearItem"),
  User = require("mongoose").model("User");

module.exports = {
  createGearItem: (req, res) => {
    console.log("🤞  Attemping to Create New Gear Item...");
    GearItem.create(req.body)
      .then(newGearItem => {
        console.log("👍  New Gear Item Successfully Created.");
        // Add Gear Item to User:
        console.log(req.session);
        User.findOne({ _id: req.session.userId })
          .then(user => {
            console.log(user);
            user.gearItems.push(newGearItem._id);
            user.save();
            // Note: No need to send back the gear item here since when we load the dashboard/gear item list, we'll retrieve them all
            return res.status(201).json({ success: "success" });
          })
          .catch(error => {
            console.log(error);
            error = {
              errors: {
                invalid: {
                  message: "Something's wrong here, contact the admin."
                }
              }
            };
            return res.status(403).json(error.errors);
          });
      })
      .catch(error => {
        console.log("😬  Error Creating New Gear Item:");
        console.log(error);
        return res.status(403).json(error.errors);
      });
  }
};
