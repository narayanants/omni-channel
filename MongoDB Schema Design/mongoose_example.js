var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
		match: /.+@.+\..+/,
		lowercase:true
	},
	loggedInCount:{
		type:Number,
		default:0
	}
});

//Parameters are : model name,schema,collection name
var User = mongoose.model('User',userSchema,'users');

var user = new User({
	name:'John Doe',
	email:'john@smith.io'
});

user.save(function(err){
	if(err){
		console.log(err);
		process.exit(1);
	}
	User.find({email:'john@smith.io'},function(err,docs){
		if(err){
			console.log(err);
			process.exit(1);
		}
		console.log(require('util').inspect(docs));
		process.exit(0);
	});
});
