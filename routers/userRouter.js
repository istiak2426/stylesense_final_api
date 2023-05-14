const router = require('express').Router();
const { signIn, signUp, review } = require('../controllers/userControllers');

router.route('/signup')
    .post(signUp);

router.route('/signin')
    .post(signIn);

    router.route('/review')
    .get(review);

module.exports = router;