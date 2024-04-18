const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.users = require("./systemuser");
db.posts = require("./posts");


module.exports = db;