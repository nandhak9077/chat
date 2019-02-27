var jwt = require('jsonwebtoken');
var secret = abcgfft;
try{
    var auth = function(req,res,next){
        console.log("In auth");
        var token = req.headers["token"];
        console.log(token,"token is in auth");
        var response ={
            'message':"unauthorised user"
        };
        jwt.verify(token,secret,function(err,decodedData){
            if(err){
            console.log(err);
            return res.status(401).send(response);
            }
            else {
                console.log(decodedData);
                next();
            }
        });
    }
}catch(err){
    console.log("Error found in generating token...");
}
module.exports = auth;