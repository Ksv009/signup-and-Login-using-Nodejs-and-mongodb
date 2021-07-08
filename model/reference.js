const mongoose = require("mongoose");

const referenceschema = new mongoose.Schema({
    firstname: {
        type: String,
        default:" "
      },
      lastname: {
        type: String,
        default:" "
      },
      email: {
        type: String,
        unique: true,
        default:" "
      },
      password: {
        type: String,
        default:""
      },
      deviceid: {
        type: String,
        default: ""
      },
      appid: {
        type:String,
        default:" "
      },
      referenceid:{
          type: String,
          default:""
      },
      referenceby: {
        type: String,
        default:"",
        references: {
            model: 'users',
            key: 'referenceid'
        }
    }
});

module.exports = mongoose.model("user", referenceschema);