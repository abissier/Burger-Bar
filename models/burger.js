// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

var burger = {
	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb) {
		orm.insertOne('burger', cols, vals, function(res) {
			cb(res);
		});
	},

	updateOne: function(objColVals, condition, cb) {
		orm.updateOne('burger', objColVals, condition, function(res) {
			cb(res);
		});
	},

	deleteOne: function(objColVals, condition, cb) {
		orm.deleteOne('burger', objColVals, condition, cb, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;
