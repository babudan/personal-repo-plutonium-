const express = require('express');
const router = express.Router();

// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

// router.get("/random" , function(req, res) {
//     res.send("hi there")
// })


// router.get("/test-api" , function(req, res) {
//     res.send("hi FunctionUp")
// })


// router.get("/test-api-2" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API")
// })


// router.get("/test-api-3" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
// })


// router.get("/test-api-4" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })



// router.get("/test-api-5" , function(req, res) {
//     res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })

// router.get("/test-api-6" , function(req, res) {
//     res.send({a:56, b: 45})
// })

// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })

let players = [
    {
        name : "manish",
        dob : "1/1/1995",
       gender : "male",
       city : "delhi",
       sports : [
            "soccer"
       ]
    },
    {
        name : "gopal",
        dob : "1/9/1995",
       gender : "male",
       city : "jalandhar",
       sports : [
            "swimming"
       ]
    },
    {
        name : "lokesh",
        dob : "1/1/1990",
       gender : "male",
       city : "mumbai",
       sports : [
            "soccer"
       ]
    }
]


// router.post("/players" ,function(req,res){
//     let pol = req.body;
//     for(i=0; i<players.length; i++){
//         if(players[i].name===pol.name){
//             return res.send("this player is already exist");
//         }
//     }
//     players.push(pol);
//     res.send(players);
// })
// router.post("/players" ,function(req,res){
//     let pol = req.body;
//     let isnewplayer = false;
//     for(i=0;i<players.length;i++){
//         if(players[i].name===pol.name){
//             isnewplayer = true;
//             break;
//         }
//     }   
//     if(isnewplayer){
//           res.send("this player is already added");
//     }else {
//     players.push(pol);
//     res.send(players);
//     }
// })
let persons = [
    {
        name : "pk",
        age : 10,
        votingstatus : false
    },
    {
        name : "SK",
        age : 20,
        votingstatus : false
    },
    {
        name : "AA",
        age : 70,
        votingstatus : false
    },
    {
        name : "SC",
        age : 5,
        votingstatus : false
    },
    {
        name : "HO",
        age : 40,
        votingstatus : false
    }
]
// router.post("/votingage" , function(req,res){
//     let arr = [];
//     let personage = req.query.age;
//     for(i=0;i<persons.length;i++){
//         if(persons[i].age>personage){
//             persons[i].votingstatus = true;
//            arr.push(persons[i]);
//         }
//     }
//     res.send(arr);
// })
router.post("/votingage" , function(req,res){
 let personage = req.query.age;
 const a =  persons.filter(x=>x.age>personage).filter(b=>b.votingstatus=true);
   res.send(a);
})



module.exports = router;