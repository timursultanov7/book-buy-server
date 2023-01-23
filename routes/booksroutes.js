/** @format */
const express = require("express");
const router = express.Router();
const {
  _getAllBooks,
  _getGenre,
  _getBook,
  _searchBooks,
} = require("../controlers/bookscontrolers");

// To All books
router.get("/all", _getAllBooks);

// To the books
router.get("/categories/:genre", _getGenre);
router.get("/book/:id", _getBook);
router.get("/search", _searchBooks);

module.exports = router;
