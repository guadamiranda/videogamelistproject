import mongoose from "mongoose";

const UserScheme = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  userName: String,
});

export default mongoose.model("user", UserScheme);
