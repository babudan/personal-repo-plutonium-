const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    author_id : {
        type : Number,
        required : true
    },
    author_name : String,
    age : Number,
    address : String
}, { timestamps: true });

    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]


module.exports = mongoose.model('Author', userSchema) //users



// String, Number
// Boolean, Object/json, array