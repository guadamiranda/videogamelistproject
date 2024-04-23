const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  userName: String,
});

module.exports = mongoose.model("user", UserScheme);
