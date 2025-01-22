import { Schema } from "mongoose";

import { model, models } from "mongoose";

const Product = new Schema({
  title: { require: true, type: String },
  price: { require: true, type: Number },
  off: { require: true, type: Number },
  url: { require: true, type: String },
  strap: { require: true, type: String },
  quantity: { type: Number, default: 1, require: true },
  isOrder: { type: Boolean, default: false },
  productId:{type:Schema.Types.ObjectId ,ref:'Products' },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  addAT: { type: Date, default: () => Date.now() },
});

const Basket = models.Basket || model("Basket", Product);

export default Basket;
