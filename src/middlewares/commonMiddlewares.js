  const moment = require ("moment");
// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

const mid4= function ( req, res) {
    console.log("Hi I am a middleware named Mid4")
}

// const time1 = function(req,res){
//     const date = moment().format("DD-MM-YYYY , hh:mm:ss");
//     console.log(date);
// }
// const ipmid = function(req,res){
// //     // var adress = ipadress.getClientIp(req);
    //  let a = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || req.socket.remoteAddress
//     // var ip = req.ip.split(':ffff:x.x.x.x').pop();
//     // var ipInfo = getIP(req);
//     //  console.log(ipInfo);
//     // console.log(ip.address());
//     console.log(a);
// }

// const routename  = function(req,res){
//     var rou = req.path;
//     console.log(rou);
// }


// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4

// module.exports = {time1,ipmid,routename};
