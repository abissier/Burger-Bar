var connection = require("../config/connection.js");

// Object for all SQL statement functions.
var orm = {
    //get request in burger_controller.js
    selectAll: function () {
        var query = "SELECT * FROM burgers";
        connection.query(query, function (err, res) {
            if (err) throw err;
            console.log(res)
        });
    },
    //post request in burger_controller.js
    insertOne: function (insertBurger) {
        var query = "INSERT INTO burgers (burger_name) VALUES ?";
        connection.query(query, insertBurger, function (err, res) {
            if (err) throw err;
            console.log(res)
        });
    },
    //put request in burger_controller.js
    updateOne: function (burgerId) {
        var query = "UPDATE burgers SET devoured=true WHERE id=?";
        connection.query(query, burgerId, function (err, res) {
            if (err) throw err;
            console.log(res)
        });
    }
};

// Export the orm object 
module.exports = orm;
