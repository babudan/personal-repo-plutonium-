const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();


// router.get("/sol1", function(req, res){
//     const numbers = [1,2,3,4,5,7,8,9];
// let sum = 0;
// let n = numbers.length +1 ;
// let naturalsum = n*(n+1)/2;
// for (i=0;i<numbers.length;i++){
//  sum += numbers[i];
// }
// let missingNumber =  naturalsum - sum;
// res.send(`{data : ${missingNumber}}`);
// console.log(`{data : ${missingNumber} }`);
// })
router.get("/sol2" , function(req,res){
    let arr = [33, 34, 35, 37, 38];
    let n = arr.length +1 ;
    let sum = 0;
    for(i=0;i<arr.length;i++){
        let firstnum = arr[0];
        let lastnum = arr[arr.length-1];
        sumofnumbers = n*((firstnum + lastnum)/2);
           sum += arr[i];
    }
    let missingNumber = sumofnumbers - sum ;
    res.send(`{data : ${missingNumber}}`);
    console.log(`{data : ${missingNumber}}`);
})
module.exports = router;