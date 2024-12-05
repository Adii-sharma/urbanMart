const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: {
      // This indicates a reference to another document (specifically, a User document).
      type: mongoose.Schema.Types.ObjectId,
      // Specifies that the userId refers to the User model.
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", CartSchema);
