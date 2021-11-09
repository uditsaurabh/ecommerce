const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    userId: { type: String },
    products: [
      { productId: { type: String }, quantity: { type: Number, default: 1 } },
    ],
    amount: {
      type: Number,
      required: true,
    },
    address: { type: Object },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
