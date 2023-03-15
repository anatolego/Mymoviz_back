var express = require("express");
var router = express.Router();
let fetch = require("node-fetch");

// route /movies chargée de faire une requête vers le webservice The Movie Database
router.get("/movies", (req, res) => {
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  )
    .then((response) => response.json())
    .then((data) => res.json({ result: true, movies: data.results }));
});

module.exports = router;
