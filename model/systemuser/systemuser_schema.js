const mongoose = require("mongoose");
const schemaType = require("../../common");

const userSchema = new mongoose.Schema(
    {
      username: {
        type: schemaType.TypeString,
        required: true,
      },
      email: {
        type: schemaType.TypeString,
        required: true,
      },
      password: {
        type: schemaType.TypeString,
        requried: true,
      },
      created_date: {
        type: schemaType.TypeDate,
        default: Date.now,
      },
    },
    { timestamps: true }
  );

module.exports = userSchema;