var userModel = require('../app/model/user.model');
//Register purpose
exports.register=(req,callback)=>{
    userModel.register(req,(err,data)=>{
        if(err){
            return callback(err);
        }else{
            return callback(null,data);
        }
    })
}
//Login purpose
exports.login=(req,callback)=>{
    userModel.login(req,(err,data)=>{
        if(err){
            return callback(err);
        }else{
            return callback(null,data);
        }
    })
}