
const str = require('@supercharge/strings');
const rstr = require('randomstring');


/**
* Generate ramdom string 
*/

random = (string) => {
    return str.random();
}

randomstr = () => {
    return rstr.generate({
        length:5,
        charset:'alphanumeric'
    });
}

module.exports = {
random,
randomstr
}


