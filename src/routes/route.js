const express = require('express');
const lodash1  = require("lodash");
const abc = require('../introduction/intro');
const logger = require("../logger/logger.js");
const util = require("../util/helper.js");
const formatter = require("../validator/formatter.js");
const router = express.Router();

// router.get('/test-me', function (req, res) {
//       logger.welcomefun();
//     res.send('My first api!')
// });
// router.get('/test-me', function (req, res) {
//       util.PrintDate();
//       util.PrintMonth();
//       util.getBatchInfo();
//   res.send('My first api!')
// });
// router.get('/test-me', function (req, res) {
//       formatter.str();
//       formatter.pol();
//       formatter.nol();
//   res.send('My first api!')
// });
// router.get('/test-me', function (req, res) {
//         const array = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//         const b = lodash.chunk(array,3);
//         console.log(b);
//         res.send("lodash package succesful");
//     });
    // router.get('/test-me', function (req, res) {
    //     const array1 = [1,3,5,7,9,11,13,15,17,19]
    //     const b = lodash.tail(array1);
    //     console.log(b);
    //     res.send("lodash package succesful");
    // });
    // router.get('/test-me', function (req, res) {
    //     const array1 = [1,3,5,7,9,11,13,15,17,19]
    //     const b = lodash.tail(array1);
    //     console.log(b);
    //     res.send("lodash package succesful");
    // });
    // router.get('/test-me', function (req, res) {
    //     const array2 = [1,3,5,7,9];
    //     const array3 = [1,2,5,8,9];
    //     const array4 = [1,5,10,12,15];
    //     const array5 = [0,9,67,27,35];
    //     const array6 = [5,37,8,78,76];
    //     const b = lodash.union(array2,array3,array4,array5,array6);
    //     console.log(b);
    //     res.send("lodash package succesful");
    // });
    router.get('/test-me', function (req, res) {
        const array7 = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
        const b = lodash1.fromPairs(array7);
        console.log(b);
        res.send("lodash package succesful");
    });
module.exports = router;
// adding this comment for no reason