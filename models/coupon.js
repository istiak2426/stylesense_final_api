const { Schema, model } = require('mongoose');
const Joi = require('joi');

module.exports.Coupon = model('Coupon', Schema({
    

    name: {
        type: String,
        required: true,
        
    },
    discount: {
        type: String,
		required: true,
      
        
    }
}, { timestamps: true }));