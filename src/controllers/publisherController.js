const PublisherModel= require("../models/publisherModel")
// const mongoose = require("mongoose");

// const createPublisher= async function (req, res) {
//     let publisher = req.body;
//     let publisherCreated = await PublisherModel.create(publisher);
//     res.send({data: publisherCreated});
// }

// module.exports.createPublisher= createPublisher;

const createnewpublisher= async function (req, res) {
    let publisher1 = req.body;
    let newpublisherCreated = await PublisherModel.create(publisher1);
    res.send({data: newpublisherCreated});
}

module.exports.createnewpublisher= createnewpublisher;