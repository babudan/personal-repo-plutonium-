const express = require('express');
const abc = require('../introduction/intro')
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
router.get('/test-me', function (req, res) {
      formatter.str();
      formatter.pol();
      formatter.nol();
  res.send('My first api!')
});


// router.get('/test-you', function(req, res){
//     res.send('This is the second routes implementation')
// })

// router.get('/give-me-students-data',function(req, res){

// })
module.exports = router;
// adding this comment for no reason