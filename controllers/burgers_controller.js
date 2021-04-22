var express = require('express');
var router = express.Router();

// Import the model to use its database functions.
var burger = require('../models/burger.js');

//gets all burgers via selectAll orm
router.get('/', function(req, res) {
	burger.selectAll(function(data) {
		var bObject = {
			burgers: data
		};

		// console.log("contoller file objcts: " + bObject);
		res.render('index', bObject);
	});
});

//inserts a burger via insertOne orm
router.post('/api/burgers', function(req, res) {
	var newBurger = {
		burger_name: req.body.name,
		devoured: req.body.devoured
	};
	burger.insertOne(newBurger, function(result) {
		res.json({ id: result.insertId });
	});
});

//updates a burger via updateOne orm
router.put('/api/burgers/:id', function(req, res) {
	var burgerId = req.params.id;

	burger.updateOne(burgerId, function(result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

// delete burger via delete orm
router.delete('/api/burgers/:id', function(req, res) {
	var burgerId = req.params.id;

	burger.deleteOne(burgerId, function(result) {
		if (result.affectedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

// Export routes for server.js to use.
module.exports = router;
