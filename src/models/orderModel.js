const mongoose = require('mongoose');
const objectid = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
	"userId": objectid,
	"productId": objectid,
	"amount": Number,
	"isFreeAppUser": Boolean,
	"date": String

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)
