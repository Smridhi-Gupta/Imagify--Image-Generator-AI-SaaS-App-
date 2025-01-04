import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: { type: String, requd: true },
  plan: { type: String, requd: true },
  amount: { type: Number, requd: true },
  credits: { type: Number, requd: true },
  payment: { type: Boolean, default: false },
  date: { type: Number },
});

// model name is user, and frst mongoose will search for model and use it nyi to will create new model
const transactionModel =
  mongoose.models.transaction ||
  mongoose.model("transaction", transactionSchema);

export default transactionModel;
