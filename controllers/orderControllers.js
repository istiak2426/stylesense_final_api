const _ = require('lodash');
const { Order } = require('../models/order');
const { User } = require('../models/user');

module.exports.createOrder = async (req, res) => {
   

    const order = new Order(req.body);
    const result = await order.save();
    return res.status(201).send({
        message: "order created successfully!",
        result
    })
}

module.exports.getAllOrders = async (req, res) => {



    const order = await Order.find();
     return res.status(200).send(order);

}

module.exports.getSpecificOrders = async (req, res) => {

    const id = req.params.userId;
    const user = await User.findOne({_id:id})

    const orders = await Order.find({user:user});
    return res.status(200).send(orders);

}

