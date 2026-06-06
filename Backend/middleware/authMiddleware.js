const jwt = require("jsonwebtoken")

function verifyToken(req,res,next){
 //controllo preliminare sull' Header della richiesta
    const authHeader= req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({message: "Not Valid or Missing Token: Unauthorized"});
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded= jwt.verify(token,process.env.JWT_SECRET)
        //attacco l'informazione sull'utente all'oggetto req
        req.user = { id: decoded.user._id };

        next();
    }catch(error){
     return res.status(401).json({ message: 'Unauthorized: Invalid token' });  
    }
}

module.exports = verifyToken;
     


