// This is the database config file for the server-side of GearList
let mongoose = require("mongoose"),
  path = require("path"), // for working with file tree
  fs = require("fs"), // for accessing file system
  modelsPath = path.join(__dirname, "./../models"), // provide access to models folder
  databaseName = "gearListDB";

mongoose.set("useCreateIndex", true);

// Iterate through models folder and load each JS file:
fs.readdirSync(modelsPath).forEach(file => {
  if (file.indexOf(".js") > 0) {
    require(modelsPath + "/" + file);
  }
});

// Setup Mongoose and MongoDB connection:
mongoose.connect(
  "mongodb://localhost/" + databaseName,
  { useNewUrlParser: true }
);

// Mongoose/Mongo/Node connection events:
mongoose.connection
  .on("connected", function() {
    console.log("⛓  Mongoose now connected to MongoDB using DB:", databaseName);
  })
  .on("disconnected", function() {
    console.log("Mongoose disconected from:", databaseName);
  })
  .on("error", function(err) {
    console.log(
      "🔌  Mongoose has encountered an error connecting to MongoDB.",
      err
    );
  });

// If Node connection breaks, close Mongoose and MongoDB connections:
process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log(
      "🔌  Mongoose connection to MongoDB closing due to lost Node connection."
    );
    process.exit(0);
  });
});

module.exports = function(app) {};
