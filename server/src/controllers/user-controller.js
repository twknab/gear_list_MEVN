const User = require("mongoose").model("User");

module.exports = {
  createUser: (req, res) => {
    console.log("🤞  Attemping to Create New User...");
    User.create(req.body)
      .then(newUser => {
        // set session
        console.log("👍  New User Successfully Created.");
        console.log(newUser);
        return res.status(201).json(newUser);
      })
      .catch(error => {
        console.log("😬  Error Creating New User:");
        console.log(error);
        for (var i in error.errors) {
          console.log(`- ${error.errors[i].message}`);
        }
        return res.status(403).json(error.errors);
      });
  },
  loginUser: (req, res) => {
    console.log("🤞  Logging in Existing User...");
    User.findOne({ email: req.body.email })
      .then(foundUser => {
        // User was found
        // set session
        console.log("👍  User Successfully Found.");
        console.log(foundUser);
        // Validate Password
        User.schema.methods.decryptPass(
          req.body.password,
          foundUser.password,
          function(success, error) {
            if (success) {
              // Password validated return user
              return res.status(200).json(foundUser);
            } else {
              // Password failed and send error
              return res.status(401).json(error.errors);
            }
          }
        );
      })
      .catch(error => {
        // User was not found
        console.log("😬  Error Finding User:");
        error.errors.invalid = {
          message: "Invalid email or password."
        };
        return res.status(401).json(error.errors);
      });
  }
};
