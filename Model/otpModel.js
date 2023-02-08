const { Schema, model } = require("mongoose");
module.exports.Otp = model(
  "Otp",
  Schema(
    {
      number: {
        type: String,
        required: true,
      },
      otp: {
        type: String,
        required: true,
      },

      createdAt: { type: Date, default: Date.now, index: { expires: 300 } },

      // otp will be deleted after 5 mins!
    },
    { timestamps: true }
  )
);
