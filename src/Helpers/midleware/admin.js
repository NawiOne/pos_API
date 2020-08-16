const jwt = require('jsonwebtoken');
const formRespon = require("../form-respon");

const checkAdmin = (req, res, next) => {
    const bearerToken = req.header('x-access-token');
    if(!bearerToken) {
        res.json({
            msg: "invalid token",
        });

    }
    try {
        const token = bearerToken.split(" ")[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if(decoded.id_level !== 1) {
            res.json({
                msg: "'Sorry Access Denied. you're not Admin"
            });
        } else {
            req.decodedToken = decoded;
            next();
        }

    } catch(error) {
        formRespon.error(res, error);

    }
};

module.exports = checkAdmin;