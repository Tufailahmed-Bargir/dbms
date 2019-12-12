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

// gets all books
router.get("/", asyncHandler(async (req, res) => {
  const books = await Book.findAll({ order: [[ "title", "ASC" ]]});
  res.render('index', { books: books, title: 'Books' });
}));

// gets new book form
router.get("/new", asyncHandler(async (req, res) => {
  res.render("new-book", { book: {}, title: "New Book" });
}));

// posts a new book to the database
router.post("/new", asyncHandler(async (req, res) => {
  const book = await Book.create(req.body);
  res.redirect("/books/" + book.id);
}));

// gets an individual book
router.get("/:id", asyncHandler(async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  res.render("update-book", { book: book, title: book.title })
}));

// posts an update for an existing book
router.post("/:id", asyncHandler(async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  await book.update(req.body);
  res.redirect("/books/" + book.id);
}));

// deletes a book from the database
router.post("/:id/delete", asyncHandler(async (req, res) => {
  res.send("respond with a resource");
}));

module.exports = router;
