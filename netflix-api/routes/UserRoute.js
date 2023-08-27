const { addToLikedMovies } = require('../controllers/UserCtrl');

const router = require('express').Router();

router.post('/add', addToLikedMovies);

 
module.exports = router;