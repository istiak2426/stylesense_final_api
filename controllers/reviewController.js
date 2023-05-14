const _ = require('lodash');
const { Review } = require('../models/review');

const { Product } = require('../models/product');

module.exports.createReview = async (req, res) => {
    
    const review = new Review(req.body);
    const result = await review.save();
    return res.send(result)


}

module.exports.getReviebyId = async (req, res) => {
    

    const getProductId = await Product.findById(req.params.productId);

    const getReview = await Review.find({ productId: getProductId._id });

    return  res.send(getReview);

}