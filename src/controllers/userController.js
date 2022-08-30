const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


  // Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api


  const createUser = async function(req,res){
    try {
      let body1 = req.body;
      if ( Object.keys(body1).length != 0) {
    let user = await userModel.create(body1);
    res.status(200).send({msg:user});
      }
      else res.status(400).send("in the body there is no data");
    }
    catch (err) {
      console.log("This is the error :", err.message)
      res.status(500).send({ msg: "Error", error: err.message })
  }
  }

const loginUser = async function(req,res){
  try {
  let body2 = req.body;
  let user = body2.emailId;
  let pass = body2.password;
  let validemailpass = await userModel.findOne({emailId:user,password:pass});
    if(!validemailpass)  return res.status(400).send({ msg: "plss input the correct emailid or password"});
    let uniqueid = validemailpass._id;
    let token1 = jwt.sign({
      _id: uniqueid,
      userid:user,
      password:pass
    },
    "myself-arindam-dan"
    )
    res.header({"x-auth-token":token1});
    res.status(200).send({status:true,data :{token:token1}});
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
}
}
   
  const getUserData = async function(req,res){   
    try {
   let userid = req.params.userId;
    let validuser = await userModel.findById(userid);
    if(!validuser)   {
      res.status(400).send({ msg: "user is not present"});
    }else {
     res.send({msg:validuser});
    }
    }
    catch (err) {
      console.log("This is the error :", err.message)
      res.status(500).send({ msg: "Error", error: err.message })
  }
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzBlNDVjZmM4N2YyYmNiYjc0ZGUzMjgiLCJ1c2VyaWQiOiJhcmlAZ21haWwuY29tIiwicGFzc3dvcmQiOiI5ODc2NTQzMjEiLCJpYXQiOjE2NjE4Nzk3NzV9.kRRgrzg96pPCNhNATfv9Omd2DX1HWgM0PA_E4dPd7w8

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzBlNGZmMjhhMWM1NWEzMmZiMTdhZTIiLCJ1c2VyaWQiOiJkaWRpQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2Nzg5IiwiaWF0IjoxNjYxODgyMzY5fQ.H67o04du9CtSJWR72ZYlXGdm45YhhdgmPl670lhLnr4




const updateUser = async function(req,res){
  try {
     let userid1 = req.params.userId;
     let user = await userModel.findById(userid1);
     if (!user) {
       res.status(400).send({ msg: "user is not present"});
     }
     let userData = req.body;
     let updatedUser = await userModel.findOneAndUpdate({ _id: userid1 }, userData,{new:true});
     res.status(200).send({ status:"updated", data: updatedUser });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

const deleteUser = async function(req,res){
  try {
  let userid2 = req.params.userId;
  let user1 = await userModel.findById(userid2);
  if (!user1) return res.status(400).send({ msg: "user is not present"});
  let deletedUser = await userModel.findOneAndUpdate({_id: userid2},{ isDeleted : true },{new:true});
  res.status(200).send({ status:"deleted", data: deletedUser });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

  module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;

