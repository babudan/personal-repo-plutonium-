const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newbookSchema = new mongoose.Schema( {
    name: String,
    author : {
        type: ObjectId,
        ref: "Newauthor1",
         required : true
    }, 
    price: Number,
    ratings: Number,
    publisher : {
        type: ObjectId,
        ref: "Newpublisher1",
        required : true
    },
    isHardCover : {
        type : Boolean,
        default : false
    }

}, { timestamps: true });


// module.exports.oldbook = mongoose.model('Newbook', bookSchema);

module.exports = mongoose.model('Newbook1', newbookSchema)
