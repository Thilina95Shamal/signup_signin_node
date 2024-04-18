const mongoose = require("mongoose");
const userSchema = require("./systemuser_schema"); 

const user = mongoose.model("users", userSchema);

module.exports = user;