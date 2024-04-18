const { find } = require("../../controller");
const authenticateToken = require("../../service/authConfig")

const getPosts = async (req, res, next) => {
    
    try {
        //can call middleware as this also
        await authenticateToken(req, res, () => {
            
            let response = find("posts", {username:req.body.username});
            return res.status(200).send({ status: 200, response });
        });
    } catch (e) {
      res.status(405).send({ status: 405, message: e.message });
    }
  };

  module.exports = getPosts;