const mongoose = require('mongoose');

// const publisherSchema = new mongoose.Schema( {
//     name: String,
//     headQuarter : String

// }, { timestamps: true });

// module.exports = mongoose.model('Newpublisher', publisherSchema);

const newpublisherSchema = new mongoose.Schema( {
    name: String,
    headQuarter : String

}, { timestamps: true });

module.exports = mongoose.model('Newpublisher1', newpublisherSchema)