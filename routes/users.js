var express = require('express');
var router = express.Router();
const Book = require("../models").Book;

// handler function to wrap each route
function asyncHandler(cb) {
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

/* GET users listing. */
router.get('/', asyncHandler(async (req, res) => {
  res.send('respond with a resource');
}));

module.exports = router;
