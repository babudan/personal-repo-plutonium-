const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const midcontroller = require("../middlewares/middleware");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser );

router.post("/login", userController.loginUser);

//The userId is sent by front end
router.get("/users/:userId",midcontroller.midwar ,userController.getUserData);

router.put("/users/:userId",midcontroller.midwar, userController.updateUser);

// router.delete("/users/:userId",midcontroller.midwar, userController.deleteUser);


module.exports = router;