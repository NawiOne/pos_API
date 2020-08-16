const jwt = require('jsonwebtoken');
const formRespon = require("../form-respon");

const checkToken = (req, res, next) =>{
    const bearerToken = req.header('x-access-token');
    if(!bearerToken){
        res.json({
            msg : "please login first",
        })

    }
    try {
        const token = bearerToken.split(" ")[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.decodedToken = decoded;
        next()
        
    } catch (error) {
        formRespon.error(res,error)
        
    }
}

module.exports = checkToken;