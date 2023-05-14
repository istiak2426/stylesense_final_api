const { Coupon } = require('../models/coupon');

module.exports.createCoupon = async (req, res) => {
    
    const coupon = new Coupon(req.body);
    const result = await coupon.save();
    return res.send(result)


}

module.exports.getCoupon = async (req, res) => {
    
    const getCoupon = await Coupon.find();
 
    return res.send(getCoupon)

}