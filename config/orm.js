var connection = require('../config/connection.js');

// Object for all SQL statement functions.
var orm = {
	//get request in burger_controller.js
	selectAll: function(burgers, cb) {
		var query = 'SELECT * FROM burgers';
		connection.query(query, function(err, res) {
			if (err) throw err;
			cb(res);
		});
	},
	//post request in burger_controller.js
	insertOne: function(newBurger, a, cb) {
		//turns false string into Boolean
		var isTrueSet = a.devoured == 'true';

		var queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES (';
		queryString += "'";
		queryString += a.burger_name;
		queryString += "',";
		queryString += isTrueSet;
		queryString += ');';

		connection.query(queryString, function(err, res) {
			if (err) throw err;
			cb(res);
		});
	},

	//put request in burger_controller.js
	updateOne: function(burger, id, cb) {
		var query = 'UPDATE burgers SET devoured=true WHERE id= ? ';
		connection.query(query, id, function(err, res) {
			if (err) throw err;
			cb(res);
		});
	},

	//delete request in burger_controller.js
	deleteOne: function(burger, id, cb) {
		var queryString = 'DELETE FROM burgers WHERE id = ?';

		connection.query(queryString, id, function(err, res) {
			if (err) throw err;
			cb(res);
		});
	}
};

// Export the orm object
module.exports = orm;
