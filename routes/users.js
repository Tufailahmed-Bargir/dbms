var express = require("express");
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

// home route, redirects to /books
router.get("/", asyncHandler(async (req, res) => {
  res.send("respond with a resource");
}));

// shows the full list of books
router.get("/books", asyncHandler(async (req, res) => {
  res.send("respond with a resource");
}));

// shows the create new book form
router.get("/books/new", asyncHandler(async (req, res) => {
  res.send("respond with a resource");
}));

// posts a new book to the database
router.post("/books/new", asyncHandler(async (req, res) => {
  res.send("respond with a resource");
}));

// shows the book detail form
router.get("/books/:id", asyncHandler(async (req, res) => {
  res.send("respond with a resource");
}));

// updates book info to the database
router.post("/books/:id", asyncHandler(async (req, res) => {
  res.send("respond with a resource");
}));

// deletes a book from the database
router.post("/books/:id/delete", asyncHandler(async (req, res) => {
  res.send("respond with a resource");
}));

module.exports = router;
