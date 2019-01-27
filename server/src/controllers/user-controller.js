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
        return res.status(403).json(error.errors);
      });
  },
  loginUser: (req, res) => {
    console.log("🤞  Logging in Existing User...");
    console.log(req.body);
    User.findOne({ email: req.body.email })
      .then(foundUser => {
        // User was found
        console.log(`👍  User Successfully Found: ${foundUser.email}`);
        // Validate Password
        User.schema.methods.decryptPass(
          req.body.password,
          foundUser.password,
          function(success, error) {
            if (success) {
              // Password validated return user
              console.log("🤝  User credentials validated.");
              // Save session
              req.session.userId = foundUser.id;
              console.log("session set:");
              console.log(req.session);
              console.log(req.session.userId);
              // Send back found User
              return res.status(200).json(foundUser);
            } else {
              // Password failed and send error
              console.log("❌  Error validating user.");
              console.log(error);
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
        console.log(error);
        return res.status(401).json(error.errors);
      });
  }
};
