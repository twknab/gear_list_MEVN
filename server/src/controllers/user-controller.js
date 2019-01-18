const mongoose = require("mongoose"),
  User = mongoose.model("User");

module.exports = {
  createUser: (req, res) => {
    console.log("🤞  Attemping to Create New User...");
    console.log("$$$$$$$$");
    console.log(req.body);
    console.log("$$$$$$$$");
    User.create(req.body)
      .then(newUser => {
        // set session
        console.log("👍  New User Successfully Created.");
        console.log(newUser);
        return res.json(newUser);
      })
      .catch(error => {
        console.log("😬  Error Creating New User:");
        for (var i in error.errors) {
          console.log(`- ${error.errors[i].message}`);
        }
        return res.json(error.errors);
      });
  }
};
