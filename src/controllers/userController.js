const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

const createNewBook= async function (req, res) {
       let data =  req.body;
        let newbooks = await UserModel.create(data);
        res.send({msg: newbooks});
    }
    module.exports.createNewBook = createNewBook;
    const getAllBook = async function (req, res) {
         let allbooks= await UserModel.find();
         res.send({msg: allbooks});
     }

     module.exports.getAllBook = getAllBook;

    






// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData