var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its DB functions
var burger = require("../models/burger.js");

// Creating routes and setting up logic
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "name", "devoured"
    ], [req.body.name, req.body.devoured], function (result) {
        res.json({ id: result.insertID });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
      });
  });

  router.delete("/api/burgers/:id", function (req, res) {
      var condition = "id = " + req.params.id;

      burger.delete(condition, function (req, res) {
          if (result.affectedRows == 0) {
              return res.status(400).end();
          } else {
              res.status(200).end();
          }
        });
    });

    module.exports = router; 