import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema({
  user_name: {
    type: String,
  },
  user_photo_url: {
    type: String,
  },

});

export default mongoose.model("User", User);
