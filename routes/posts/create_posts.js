const { insertNewDocument } = require("../../controller");
const Joi = require("joi");

const schema = Joi.object({
    username: Joi.string().required(),
    postName: Joi.string().required(),
    postDescription: Joi.string(),
    status: Joi.string(),
  });


  const addPosts = async (req, res) => {
    try {
      const validate = await schema.validateAsync(req.body);
      const post = await insertNewDocument("posts", req.body);
      return res.status(201).send({ status: 201, post });
    } catch (e) {
      res.status(500).send({ status: 500, message: e.message });
    }
  };

  
  module.exports = addPosts;