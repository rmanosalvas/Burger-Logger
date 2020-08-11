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
      })
  })
