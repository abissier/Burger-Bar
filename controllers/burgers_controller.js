var express = require("express");
const orm = require("../config/orm.js");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

//gets all burgers via selectAll orm 
router.get("/", function (req, res) {

    burger.selectAll(function (data) {

        var bObject = {
            burgers: data
        };

        console.log(bObject);
        res.render("index", bObject);
    });
}),

//inserts a burger via insertOne orm 
router.post("/api/new", function (req, res) {

    var insertBurger = req.body;

    burger.insertOne(insertBurger, function (result) {
        res.json({ id: result.insertId})
    });
}),

//updates a burger via updateOne orm 
router.put("/api/:id", function (req, res) {

    var burgerId = req.params.id;

    burger.updateOne(
        {
            devoured: true
        })
        burgerId, function (data) {
        console.log(data)
        
    })
})

// Export routes for server.js to use.
module.exports = router;
