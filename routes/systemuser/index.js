const express = require("express");
const router = express.Router();


const createUser = require("./signup_user");
const loginUser = require("./login_user");


router.post("/signup", createUser);
router.post("/login", loginUser);

module.exports = router;