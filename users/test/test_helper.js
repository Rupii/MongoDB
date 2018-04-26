const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/users");

mongoose.connection
  .once("open", () => console.log("Mongo connected"))
  .on("err", err => console.log(err));
