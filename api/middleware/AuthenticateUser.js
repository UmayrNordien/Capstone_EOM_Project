require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'  
    });
}

function verifyAToken(req, res, next) {
    try{
        const token = req.cookies["Valid User"] !== null ? req.cookies["Valid User"] :
        "Please register" ;
        const valid = null;
        if(token !== "Please register") {
            valid = verify(token, process.env.SECRET_KEY);
            if(valid) {
                req.authenticated = true;
                next();
            }else {
                res.status(400).json({err: "Please register"})
            }
        }else {
            res.status(400).json({err: "Please register"})
        }
    }catch(e) {
        res.status(400).json({err: e.message});
    }
}
module.exports= {createToken, verifyAToken};