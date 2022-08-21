const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

// router.post("/createAuthor", authorController.createAuthor  );

router.post("/createnewAuthor" , authorController.createnewAuthor);

//  router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

router.post("/createnewbook" , bookController.createnewbook);

router.get("/updatenewbook" , bookController.updatenewbook);

router.get("/bookpop", bookController.bookpop);

router.get("/updaterating",bookController.updaterating);

// router.get("/getBooksData", bookController.getBooksData);

// router.post("/createPublisher", publisherController.createPublisher);

router.post("/createnewpublisher", publisherController.createnewpublisher)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;