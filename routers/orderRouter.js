const router = require('express').Router();
const {createOrder, getAllOrders, getSpecificOrders} = require("../controllers/orderControllers");
const authorize = require('../middlewares/authorize');

router.route('/')
    .get( getAllOrders)
    .post(authorize, createOrder)



    router.route('/:userId')
    .get(authorize, getSpecificOrders)

   
    

module.exports = router;