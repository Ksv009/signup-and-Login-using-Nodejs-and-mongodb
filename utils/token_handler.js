
var JWT = require('jsonwebtoken'),
    Constants = require('./constants');

generateJWTToken = (data) => {
    return JWT.sign(data, Constants.JWT_SIGNATURE);
}

validateJWTToken = (token) => {
    return new Promise((resolve, reject) => {
        JWT.verify(token, Constants.JWT_SIGNATURE, (error, data) => {
            if (error) {
                reject(error)
            } else {
                resolve(data)
            }
        })
    });
}

module.exports = {
    generateJWTToken,
    validateJWTToken
}