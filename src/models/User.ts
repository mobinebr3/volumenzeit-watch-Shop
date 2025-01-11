import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
  role: { type: String, default: "USER" },
  name: { type: String, require: true },
  lastname: { type: String },
  createdat: { type: Date, default: () => Date.now(), immutable: true },
});

const User = models.User || model("User", userSchema);
export default User;
