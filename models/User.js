import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema({

  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  is_new: {
    type: Boolean
  }
});

export default mongoose.model("User", User);
