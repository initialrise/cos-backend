const mongoose = require("mongoose");
const itemSchema = mongoose.Schema({
  url: {
    type: String,
    required: [true, "URL is required"],
    default: "demo.svg",
  },
  title: {
    type: String,
    required: [true, "TItle is required"],
  },
  time: {
    type: String,
    required: [true, "Time is required"],
  },
  ratings: {
    type: Number,
    required: [true, "Ratings is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  isSpecial: {
    type: Boolean,
    default: false,
    required: [true, "isSpecial is required"],
  },
});

const Item = new mongoose.model("Item", itemSchema);
module.exports = Item;
