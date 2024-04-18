const express = require("express");
const router = express.Router();


const addPosts = require("./create_posts");
const getPosts = require("./get_posts");


router.post("/add_posts", addPosts);
router.get("/get_posts", getPosts);




module.exports = router;