const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


router.post("/createUser", UserController.createUser);

router.post("/createBook", BookController.createBook);

router.get("/listBooks" , BookController.listBooks);

router.get("/updatebook" , BookController.updatebook);

router.get("/bookrange", BookController.bookrange);


module.exports = router;