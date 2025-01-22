import { model, models, Schema } from "mongoose";

const product = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  url: {
    type: String
  },
  images: {
    type: String,
  },
  details: {
    type: [],
  },
 figure :{
  type:{String} ,
 },
  off: {
    type: String,
    default: 0,
  },
  addAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Products = models.Products || model("Products", product);
export default Products;
