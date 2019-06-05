// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var todo = {
  all: function(cb) {

    orm.all("todos", function(res) {
      cb(res);
      console.log("res models 10:", res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    console.log("create models 14");

    orm.create("todos", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    console.log("update models 21");

    orm.update("todos", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    console.log("delete models 28");

    orm.delete("todos", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (todos_Controller.js).
module.exports = todo;