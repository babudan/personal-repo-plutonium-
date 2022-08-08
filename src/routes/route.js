const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/GET/movies', function (req, res) {
       const movies = ["Tenet","The Btamna Begins","Pather Pachali","Charlie The Choclate Factory"];
         res.send(movies);
});

router.get('/GET/movies/:indexNumber', function (req, res){
      const movies = ["Tenet","The Btamna Begins","Pather Pachali","Charlie The Choclate Factory"];
      const index = req.params.indexNumber;
      console.log(movies[index]);
      res.send(movies[index]);
})
router.get('/GET/movies/:indexNumber', function (req, res){
    const movies = ["Tenet","The Btamna Begins","Pather Pachali","Charlie The Choclate Factory"];
    const index = req.params.indexNumber;
       if(index<3){
        res.send(movies[index]);
        console.log(movies[index]);
       }else{
        res.send("use a valid index");
        console.log("use a valid index");
       }
});

router.get('/GET/films', function (req, res){
       const films = [{
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
       "name": "Finding Nemo"
       }]
       res.send(films);
});
router.get('/GET/films/:filmid', function (req, res){
    const films = [{
     "id": 1,
     "name": "The Shining"
    }, {
     "id": 2,
     "name": "Incendies"
    }, {
     "id": 3,
     "name": "Rang de Basanti"
    }, {
     "id": 4,
    "name": "Finding Nemo"
    }];
    const index1 = req.params.filmid;
    if(index1<5 && index1>0){
    res.send(films[index1-1]);
    console.log(films[index1-1]);
    }else{
        res.send("No movie exists with this id");
        console.log("No movie exists witht this id");
    }
});

module.exports = router;