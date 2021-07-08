
var Bcrypt = require('bcryptjs'),
    Constants = require('./constants'),
    salt = Bcrypt.genSaltSync(Constants.BCRYPT_SALT_COUNT);

/**
 * Encode plain password to hash 
 */

encodePassword = (password) => {
    return Bcrypt.hashSync(password, salt);
}

/**
 * Comparing given password with hashed password
 */

comparePassword = (password, hash) => {
    return Bcrypt.compareSync(password, hash);
}

module.exports = {
    encodePassword,
    comparePassword
}