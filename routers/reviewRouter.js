const router = require('express').Router();
const { createReview, getReviebyId  } = require('../controllers/reviewController');

const authorize = require('../middlewares/authorize');

router.route('/')
    .post( createReview)


    router.route('/:productId')
    .get(getReviebyId)
   

module.exports = router;