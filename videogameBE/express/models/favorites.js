const mongoose = require("mongoose");

const FavoritesSchema = {
  userId: String,
  gameId: String,
  state: String,
  note: String,
};

module.exports = mongoose.model("favorites", FavoritesSchema);
