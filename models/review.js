const { Schema, model } = require('mongoose');
const Joi = require('joi');

module.exports.Review = model('Review', Schema({
    
    productId: {
        type: String,
     
        required: true
      },
    name: {
        type: String,
        required: true,
        
    },
    comment: {
        type: String,
        required: true,
        
    }
}, { timestamps: true }));

// module.exports.validate = review => {
//     const schema = Joi.object({
//         productId: Joi.string().required(),
//         name: Joi.string().min(3).max(50).required(),
//         comment: Joi.string().max(50).required()

//     });
//     return schema.validate(review);
// }