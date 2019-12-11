const express = require("express");
const router = express.Router();
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

// shows the full list of books
router.get("/", asyncHandler(async (req, res) => {
  res.render('index', { title: 'Books' });
}));

// shows the create new book form
router.get("/new", asyncHandler(async (req, res) => {
  res.render("new-book", { book: {}, title: "New Book" });
}));

// posts a new book to the database
router.post("/new", asyncHandler(async (req, res) => {
  const book = await Book.create(req.body);
  res.redirect("/books/" + book.id);
}));

// shows the book detail form
router.get("/:id", asyncHandler(async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  res.render("book-detail", { book: book, title: book.title })
}));

// updates book info to the database
router.post("/:id", asyncHandler(async (req, res) => {
  res.send("respond with a resource");
}));

// deletes a book from the database
router.post("/:id/delete", asyncHandler(async (req, res) => {
  res.send("respond with a resource");
}));

module.exports = router;
