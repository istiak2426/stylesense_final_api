const router = require('express').Router();
const { createCoupon, getCoupon  } = require('../controllers/couponControllers');
const admin = require('../middlewares/admin');

const authorize = require('../middlewares/authorize');

router.route('/')
    .post([authorize,admin], createCoupon)


    router.route('/')
    .get( getCoupon)
   

module.exports = router;