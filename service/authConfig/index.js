require("dotenv").config();
const jwt = require("jsonwebtoken")

function authenticateToken(req,res,next){
   
    const accessToken  = req.cookies.accessToken;

    if(!accessToken ){
        return res.sendStatus(401)
    }
    jwt.verify(accessToken,process.env.ACCESS_SECRET_TOKEN,(err,user) =>{
        if(err){
            return res.status(403).send({ status: 403, message: err.message });
        }
        req.user = user
        next()
    })

}

module.exports = authenticateToken;