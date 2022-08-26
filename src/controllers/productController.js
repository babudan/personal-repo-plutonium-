const { count } = require("console")
const Productmodel = require("../models/productModel")

const createProduct= async function (req, res) {
    let data= req.body

    let savedData= await Productmodel.create(data)
    res.send({msg: savedData})
}










// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createProduct = createProduct;
