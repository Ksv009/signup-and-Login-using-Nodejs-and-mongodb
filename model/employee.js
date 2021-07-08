const mongoose = require("mongoose");

const employeeschema = new mongoose.Schema({
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
        type: Number,
        default: ""
      },
      appid: {
        type:Number,
        default:" "
      }
});

module.exports = mongoose.model("employee", employeeschema);