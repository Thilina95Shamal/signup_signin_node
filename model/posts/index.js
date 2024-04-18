const mongoose = require("mongoose");
const postSchema = require("./posts_schema"); 

const posts = mongoose.model("posts", postSchema);

module.exports = posts;