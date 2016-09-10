var monoose = require('mongoose');
var Category = require('./category');

var productSchema = {
	name:{type:String,required:true},
	pictures:[{type:String,match:/^http:\/\//i}],
	price:{
		amount:{type:Number,required:true},
		//Only supported for 3 currencies now
		currency:{
			type:String,
			enum:['USD','EUR','GBP'],
			required:true
		}
	},
	category:Category.categorySchema
};

module.exports = new mongoose.Schema(productSchema);
module.exports.productSchema = productSchema;