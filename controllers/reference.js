const User = require('../model/reference');
let ResponseHandler = require('../utils/response_handler'),
    PasswordHandler = require('../utils/password_handler');
    RandomString = require('../utils/randomstring');
var rstr = require('randomstring');
const genstring =  rstr.generate({ length:7, charset:'alphanumeric'});
const mongoose = require("mongoose");

exports.registeruser = (req, res, next) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password =req.body.password;
  const deviceid =req.body.deviceid;
  const appid = req.body.appid;
  const referenceid = req.body.referenceid;
  const referenceby = req.body.referenceby;
  
  
  let requestBody;
  if (!password) {
    ResponseHandler.send(res, 400, 'Valid password required')
  }/* 
     else {
               requestBody = req.body;
               requestBody.email = PasswordHandler.encodePassword(req.body.email);
               requestBody.password = PasswordHandler.encodePassword(req.body.password); 
           } */

  const user = new User({
    firstname:firstname,
    lastname:lastname,
    email:PasswordHandler.encodePassword(req.body.email),
    password:PasswordHandler.encodePassword(req.body.password),
    deviceid:deviceid,
    appid:appid,
    referenceid: RandomString.randomstr(),       //genstring,                      RandomString.randomstr(), 
    referenceby: referenceby
  });
  user
    .save()
    .then(result => {
      ResponseHandler.send(res, 200, result, 'success');
    })
    .catch((err) => {
      ResponseHandler.send(res, 400, error.message, 'details are incorrect');
    });
};

exports.getuserdetails = (req, res, next) => {
  var mail = req.body.email
      pwd = req.body.password;

  var email = PasswordHandler.encodePassword(req.body.email);
     // password = PasswordHandler.encodePassword(pwd);

     console.log(email);

	//console.log(req.body);
  if (!mail) {
    ResponseHandler.send(res, 400, 'Required mail ID');
} else if (!pwd) {
    ResponseHandler.send(res, 400, 'Required password');
} else {
  User.findOne({email})
        .then(result => {
             let hash = result.password,
                hashmail = result.email;
                console.log(hashmail);
            if (PasswordHandler.comparePassword(pwd, hash) && PasswordHandler.comparePassword(mail, hashmail)) {
                
                ResponseHandler.send(res, 200, 'Login successfully')
            } else {
                ResponseHandler.send(res, 400, 'Login failed due to invalid password')
            }
        })
        .catch(error => {
            console.log(error)
            ResponseHandler.send(res, 400, 'User not found');
        })
}
};

