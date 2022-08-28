const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


  // Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api


  const createUser = async function(req,res){
    let body1 = req.body;
    let user = await userModel.create(body1);
    res.send({msg:user});
  }

const loginUser = async function(req,res){
  let body2 = req.body;
  let user = body2.emailId;
  let pass = body2.password;
  let validemailpass = await userModel.findOne({emailId:user,password:pass});
    if(!validemailpass)  return res.send({status:false,msg:"email or password is wrong"});
    let uniqueid = validemailpass._id;
    let token1 = jwt.sign({
      _id: uniqueid,
      userid:user,
      password:pass
    },
    "myself-arindam-dan"
    )
    res.header({"x-auth-token":token1});
    res.send({status:true,data :{token:token1}});
}
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzBiYTRlNzdjMDIwZWNjYWFhOWZjNzkiLCJ1c2VyaWQiOiJkaWRpQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2Nzg4OSIsImlhdCI6MTY2MTcwNzk5OH0.ywyn4NemLZ76iKDnbhp1YKOyEneH2WMBCB8pCHVCdUM
  const getUserData = async function(req,res){   
   let userid = req.params.userId;
    let validuser = await userModel.findById(userid);
    if(!validuser)  return res.send({status:false,msg:"user is not present"});
    return res.send({msg:validuser});
}

const updateUser = async function(req,res){
     let userid1 = req.params.userId;
     let user = await userModel.findById(userid1);
     if (!user) {
       return res.send("user is not present");
     }
     let userData = req.body;
     let updatedUser = await userModel.findOneAndUpdate({ _id: userid1 }, userData,{new:true});
     res.send({ status:"deleted", data: updatedUser });
  
}

// const deleteUser = async function(req,res){
//   let userid1 = req.params.userId;
//   let user = await userModel.findById(userid1);
//   if (!user) {
//     return res.send("user is not present");
//   }
//   let userData = req.body;
//   let deletedUser = await userModel.findOneAndUpdate({ _id: userid1 }, userData,{new:true});
//   res.send({ status:"deleted", data: deletedUser });

// }

  module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
// module.exports.deleteUser = deleteUser;
