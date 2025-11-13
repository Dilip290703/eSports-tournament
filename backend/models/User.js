const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  phoneNumber: String,
  dateOfBirth: String,
  gameId: String,
  game: String
});

module.exports = mongoose.model("User", UserSchema);
