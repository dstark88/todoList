var express = require("express");

var router = express.Router();

var todo = require("../models/todo.js");

router.get("/", function(req, res) {
    todo.all(function(data) {
        var hbsOject = {
            todos: data
        };
        res.render("index", hbsOject);
    });
});

router.post("/api/todos", function(req, res) {
    todo.create([
        "todo_name", "done"
    ], [
        req.body.todo_name, req.body.done
    ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/todos/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition controller.js 33", condition);

    todo.update({
        done: req.body.done
    }, condition, function(result) {
        if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });
});

router.delete("/api/todos/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    todo.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;