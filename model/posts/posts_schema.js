const mongoose = require("mongoose");
const schemaType = require("../../common");

const postSchema = new mongoose.Schema(
    {
      username: {
        type: schemaType.TypeString,
        required: true,
      },
      postName: {
        type: schemaType.TypeString,
        required: true,
      },
      postDescription: {
        type: schemaType.TypeString,
      },
      status: {
        type: schemaType.TypeString,
        default: "Active",
      },
      created_date: {
        type: schemaType.TypeDate,
        default: Date.now,
      },
    },
    { timestamps: true }
  );

module.exports = postSchema;