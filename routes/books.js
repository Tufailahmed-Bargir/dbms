const express = require("express");
const router = express.Router();
const Book = require("../models").Book;
const Sequelize = require('sequelize');

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
  res.redirect("/books/page/1");
}));

// gets paginated version of books list based on :id param
router.get("/page/:id", asyncHandler(async (req, res) => {
  const index = req.params.id;
  const offset = (index - 1) * 5;
  const books = await Book.findAll({ order: [[ "title", "ASC" ]], offset: offset, limit: 5 });
  const pages = await Book.count() / 5;
  res.render('index', { books: books, pages: pages, title: 'Books' });
}));

// gets search results
router.get("/search/", asyncHandler(async (req, res) => {
  const query = req.query.query;
  const Op = Sequelize.Op;
  const books = await Book.findAll({
    where: {
      [Op.or]: {
        title: {
          [Op.like]: `%${query}%`
        },
        author: {
          [Op.like]: `%${query}%`
        },
        genre: {
          [Op.like]: `%${query}%`
        },
        year: {
          [Op.like]: `%${query}%`
        }
      }
    }
  });
  res.render("index", { books: books, title: "Search Results" });
}));

// gets new book form
router.get("/new", asyncHandler(async (req, res) => {
  res.render("new-book", { book: {}, title: "New Book" });
}));

// posts a new book to the database
router.post("/new", asyncHandler(async (req, res) => {
  let book;
  try {
    book = await Book.create(req.body);
    res.redirect("/books/" + book.id);
  } catch (error) {
    if(error.name === "SequelizeValidationError") {
      book = await Book.build(req.body);
      res.render("new-book", { book: book, errors: error.errors, title: "New Book" });
    } else {
      throw error;
    }
  }
}));

// gets an individual book
router.get("/:id", asyncHandler(async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    res.render("update-book", { book: book, title: book.title });
  } else {
    res.render("book-not-found");
  }
}));

// posts an update for an existing book
router.post("/:id", asyncHandler(async (req, res) => {
  let book;
  try {
    book = await Book.findByPk(req.params.id);
    if(book) {
      await book.update(req.body);
      res.redirect("/books/" + book.id);
    } else {
      res.render("book-not-found");
    }
  } catch(error) {
    if(error.name === "SequelizeValidationError") {
      book = await Book.build(req.body);
      book.id = req.params.id;
      res.render("update-book", { book: book, errors: error.errors, title: book.title });
    } else {
      console.log("else")
      throw error;
    }
  }
}));

// deletes a book from the database
router.post("/:id/delete", asyncHandler(async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  book.destroy();
  res.redirect("/books");
}));

module.exports = router;
