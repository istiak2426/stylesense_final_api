const { Schema, model } = require('mongoose');
const { CartItemSchema } = require('./cartItem');

module.exports.Order = model('Order', Schema({
    cartItems: [CartItemSchema],
    address: {
        phone: String,
        address1: String,
        address2: String,
        city: String,
        state: String,
        postcode: Number,
        country: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    price: Number,
    orderTime: { type: Date, default: Date.now }
   
}))