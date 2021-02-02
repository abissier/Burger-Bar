var connection = require("../config/connection.js");

// Object for all SQL statement functions.
var orm = {
    //get request in burger_controller.js
    selectAll: function (burgers, cb) {
        // console.log('burgers: ' + burgers);
        var query = "SELECT * FROM burgers";
        connection.query(query, function (err, res) {
            if (err) throw err;
            cb(res)
        });
    },
    //post request in burger_controller.js
    insertOne: function (newBurger, a, cb) {
        //turns false string into Boolean
        var isTrueSet = (a.devoured == 'true');

        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (";

        queryString += "'";
        queryString += a.burger_name;
        queryString += "',";
        queryString += isTrueSet;
        queryString += ");";

        console.log("new burger variable" , newBurger);

        connection.query(queryString, function (err, res) {
            if (err) throw err;
            console.log("res: ", res)
            cb(res)
        });
    },
    
    //put request in burger_controller.js
    updateOne: function (burger, id, cb) {

        var query = "UPDATE burgers SET devoured=true WHERE id= ? ";
        connection.query(query, id, function (err, res) {
            if (err) throw err;
            cb(res)
        });
    }
};

// Export the orm object 
module.exports = orm;
