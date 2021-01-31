// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function () {
        orm.selectAll
    },

    insertOne: function () {
        orm.insertOne
    },
    updateOne: function () {
        orm.updateOne
    }
};

module.exports = burger;
