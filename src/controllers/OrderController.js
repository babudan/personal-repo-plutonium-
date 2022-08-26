const { count } = require("console")
const orderModel= require("../models/orderModel")
const productModel= require("../models/orderModel")
const userModel= require("../models/userModel")

const createorder = async function (req, res) {
    let user = req.body.userId;
    let product = greq.body.productId;
    // console.log(userfind);
    let userfind = await userModel.findById(user);
    // let all = (userfind._id).toString(); 
    // console.log(typeof all);
    if(!userfind){
        return res.send("user is missing");
    }
    let productfind = await productModel.findById(product);
    // let nol = (productfind._id).toString();
    if(!productfind) {
        return res.send("product is missing");
    }
    let data = req.body;
        let createorder = await orderModel.create(data);
        res.send({data: createorder});
}

module.exports.createorder= createorder;
