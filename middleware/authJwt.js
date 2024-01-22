const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.JWT_SECRET;

const authenticateToken = async (req,res,next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).send({message:`Echec de l'authentification`});

    const token = authHeader.split(' ')[1];

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: "Token not valid, Please Login Again" });
        }
        
        console.log("Decoded Token:", decoded);
        
        req.user = decoded;
        next();
    });
    
}

module.exports = authenticateToken;