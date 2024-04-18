require("dotenv").config();
const { findOneObject } = require("../../controller");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const Joi = require("joi");

const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

const loginUser = async (req, res) => {
    try {          
        const userLogged = await findOneObject("users",{username:req.body.username});
        if(userLogged == null){
            return res.status(404).send("Cannot find User")
        }
        try {
            if(await bcrypt.compare(req.body.password,userLogged.password)){
                const user = {username:req.body.username,password:userLogged.password}
                const accessToken = generateAccessToken(user)
                //res.set('Authorization', 'Bearer ' + accessToken);
                res.cookie('accessToken',accessToken,{httpOnly:true});     
                res.status(200).send("User Logged in")
            }else{
                res.send("User not allowed")
            }
        } catch (error) {
            res.status(500).send(error.message);
        
        }
    } catch (e) {
        res.status(405).send({ status: 405, message: e.message });
    }
  };
function generateAccessToken(user){
    //Setting expire time for access token   
    return  jwt.sign(user,process.env.ACCESS_SECRET_TOKEN,{expiresIn:'50s'})
}

module.exports = loginUser;