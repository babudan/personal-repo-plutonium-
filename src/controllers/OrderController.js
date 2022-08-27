const { count } = require("console")
const orderModel= require("../models/orderModel")
const productModel= require("../models/productModel")
const userModel= require("../models/userModel")

const createorder = async function (req, res) {
    var user = req.body.userId;
    var userfind = await userModel.findById(user);
    if(!user){
        return res.send("user id is not present");
    }if(!userfind){
        return res.send("user id is not valid");
    }
    var product = req.body.productId;
    var productfind = await productModel.findById(product);
    if(!productfind) {
        return res.send("product id is not valid");
    }if(!product){
        return res.send("product id is not present");
    }
    //   user and product id validation
        var a = req.headers.isfreeappuser;
        var b = JSON.parse (a);
        var body2 = req.body;
        let e = await userModel.findById(user).select({balance:1,_id:0});
         let f = e.balance;
         var g = await productModel.findById(product).select({price:1,_id:0});
         var h = g.price;
        //  checking the isfreappuser is true or false and according to that update the user balance and amount of the order
        // var header1 =  req.headers.isfreeappuser;
        if(b===true){
             req.body.amount = 0;
               let body1 = await orderModel.create(body2);
               return res.send(body1);
            
        } else if (b === false && f>=h){
            let u =await userModel.updateOne({_id:user},{$inc:{balance:-h}},{new:true}).select({balance:1,_id:0});
            // console.log(u);
            req.body.amount=h;
            let body3 = await orderModel.create(body2);
            return  res.send(body3);
        } 
        return  res.send("users has insufficient balance");
}

module.exports.createorder= createorder;
