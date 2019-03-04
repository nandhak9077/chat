var express = require('express');

var router = express.Router();
var users = require('../controllers/controller');
var chatController = require("../controllers/chatController");
var auth = require('../authantication');

try{
    router.get('/getAllUser',auth,users.getAllUser);
    router.get('/getUserMsg',auth,chatController.getUserMsg);
    
}
catch(err)
{
    console.log("err found while receving token - authorization.js");
}

module.exports =router