const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

async function registerUser(req, res){
    let { name, email, password} = req.body;
    try{
        const duplicate = await User.find({email});
        if(duplicate && duplicate.length > 0) {
            return res.status(400).send({message:'User already registered with this Email'});
         }
         let user = new User({name, email, password});
        const result = await user.save();
         console.log(result);
        res.status(201).send({message: 'User registered successfully !'});
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}

async function loginUser(req,res){
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).send({message: "Authentification Failed!"});
        }
        const isPasswordValid = await user.comparePassword(password);
        if(!isPasswordValid){
            return res.status(404).send({message: "You Entered Wrong Password!"});
        }
        let token = jwt.sign({ userId: user?._id }, secretKey, { expiresIn: '1m' }); 
        let finalData = {
            userId:user?._id,
            email:user?.email,
            name:user?.name,
            token
        }
        res.send(finalData);
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}

const AuthController = {
    registerUser,
    loginUser
}

module.exports = AuthController;