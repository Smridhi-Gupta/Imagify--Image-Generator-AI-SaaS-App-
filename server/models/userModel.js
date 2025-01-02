import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  creditBalance: { type: Number, default: 5 },
});

// model name is user, and frst mongoose will search for model and use it nyi to will create new model
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;