const AuthorModel = require("../models/authorModel");
const BookModel = require("../models/bookModel");
const PublisherModel = require("../models/publisherModel");
// const mongoose = require("mongoose");
const authorModel = require("../models/authorModel");

// const isValidObjectId = function (value) {
//         return mongoose.Types.ObjectId.isValid(value);
    
//     }

const createBook = async function (req, res) {
// //    let {authors,publisher} = body;
// let authors = req.body.author;
// let publisher = req.body.publisher;
//     let author_id = await AuthorModel.findById(authors).select({_id:1});
//     let publisher_id = await PublisherModel.findById(publisher).select({_id:1});
    // if(!authors){
    //     return res.send("this detail is required");
    // }if(!author_id){
    //     return res.send("the author is not present");
    // }if(!publisher){
    //    return res.send("this details is required");
    // }if(!publisher_id){
    //     return res.send("the publisher is not present");
    // }
    // let bookCreated = await BookModel.create(body);
    //    return res.send(bookCreated);
    var body = req.body;
    var authors = req.body.author;
    var publisher = req.body.publisher
    var findauthor = await AuthorModel.find().select({ _id: 1 });
    var newauthor = findauthor.map(x => x["_id"]);
    var findpublisher = await PublisherModel.find().select({ _id: 1 });
    var newpublisher = findpublisher.map(y => y["_id"]);
    // console.log(newauthor);
    for (let i = 0; i < newauthor.length; i++) {
        var a =  newauthor[i].toString();
        if (!authors){
            res.send("this detail is required");
        }else if(authors!==a){
            res.send("the author is not present");
        }
    }
        for (let j = 0; j < newpublisher.length; j++) {
            var b = newpublisher[j].toString();
            if(!publisher) {
                res.send("the detail is required");
            }if(publisher!==a){
               res.send("the publisher is not present");
            }    
    }
    let newbook3 = await BookModel.create(body);
                return res.send(newbook3);
}
                
    const createnewbook= async function (req, res) {
        let book1 = req.body;
        let newbookCreated = await BookModel.create(book1);
        res.send({data: newbookCreated});
    }
     
    const bookpop = async function(req,res){
        let newbook = await BookModel.find().populate( ['author','publisher'] );
           res.send({msg : newbook}); 
    }


    const updatenewbook = async function(req,res){
        let findnewbook = await PublisherModel.find({$or : [{name : "Penguin"},{ name : "HarperCollins"}]}).select({id:1});
        let book2 = findnewbook.map(x=>x["_id"]);
        let updatenewbook = await BookModel.updateMany({publisher: {$in:(book2)}},{$set:{isHardCover:true}},{new:true});
        res.send({msg:updatenewbook});
        }

    const updaterating = async function(req,res){
        let ratenewbook = await AuthorModel.find({rating:{$gt:3.5}}).select({_id:1});
        let rate2 = ratenewbook.map(y=>y["_id"]);
        let updatenewrate = await BookModel.updateMany({author : {$in:(rate2)}},{$inc:{price: +10}});
        res.send(updatenewrate);
    }

    module.exports.createBook=createBook;
    module.exports.createnewbook=createnewbook;
    module.exports.updatenewbook=updatenewbook;
    module.exports.updaterating=updaterating;
    module.exports.bookpop=bookpop;