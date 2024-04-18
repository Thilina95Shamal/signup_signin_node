const express = require("express");
const user = require("./systemuser");
const posts = require("./posts");
const router = express.Router();


router.use("/user", user);
router.use("/post", posts);

module.exports = router;
