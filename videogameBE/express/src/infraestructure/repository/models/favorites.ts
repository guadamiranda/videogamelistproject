const mongoose = require("mongoose");

const FavoritesSchema = new mongoose.Schema({
  userId: String,
  gameId: String,
  state: String,
  note: String,
});

export default mongoose.model("favorites", FavoritesSchema);
