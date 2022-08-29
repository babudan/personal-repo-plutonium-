const mongoose = require('mongoose');
const objectid = mongoose.Schema.Types.ObjectId;
const moment = require("moment");

const orderSchema = new mongoose.Schema( {
	"userId": objectid,
	"productId": objectid,
	"amount": Number,
	"isFreeAppUser": Boolean,
	"date":{
		type : "string",
		default : moment().format("DD-MM-YYYY")
	}

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)
