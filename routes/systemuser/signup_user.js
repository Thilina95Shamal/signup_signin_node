const { insertNewDocument } = require("../../controller");
const { find } = require("../../controller");
const bcrypt = require("bcrypt")
const Joi = require("joi");


const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
});


const createUser = async (req, res) => {
    try {
        const alreadyUserExists = await find("users",{username:req.body.username});
        if(alreadyUserExists.length > 0){
            return res.status(400).send("User Already Exists!")
        }
        const salt = await bcrypt.genSalt() 
        const hashPassword  = await bcrypt.hash(req.body.password,salt)
        req.body.password = hashPassword   
        //or either u can use : ("users",{ ...req.body, password: hashPassword })     
        const validate = await schema.validateAsync(req.body)
        const user = await insertNewDocument("users", req.body)
        return res.status(201).send({ status: 201, user })
    } catch (e) {
        console.log(e);
        
        res.status(500).send({ status: 500, message: e.message });
    }
};

module.exports = createUser;