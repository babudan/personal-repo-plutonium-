const AuthorModel= require("../models/authorModel")
// const mongoose = require("mongoose");

// const createAuthor= async function (req, res) {
//     let author = req.body
//     let authorCreated = await AuthorModel.create(author);
//     res.send({data: authorCreated});
// }
const createnewAuthor= async function (req, res) {
    let author1 = req.body
    let newauthorCreated = await AuthorModel.create(author1);
    res.send({data: newauthorCreated});
}

const getAuthorsData= async function (req, res) {
    let findauthor = await AuthorModel.find().select({_id:1});
    res.send({data: findauthor});
}

// module.exports.createAuthor= createAuthor;

module.exports.createnewAuthor= createnewAuthor;

// module.exports.getAuthorsData= getAuthorsData