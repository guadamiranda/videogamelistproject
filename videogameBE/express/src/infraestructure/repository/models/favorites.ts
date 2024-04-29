import mongoose from "mongoose";

const FavoritesSchema = new mongoose.Schema({
  userId: String,
  gameId: String,
  state: String,
  note: String,
  comment: String
});

export default mongoose.model("favorites", FavoritesSchema);
