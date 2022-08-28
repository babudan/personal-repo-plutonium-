const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    "firstName" : String,
    "lastName" : String,
    "mobile" : String,
    "emailId" : String,
    "password" : String,
    "gender" : String,
	"isDeleted": {
        type :Boolean,
        default :false
    },
    "age" : Number
}, { timestamps: true });

module.exports = mongoose.model('Jwtuser', userSchema)
