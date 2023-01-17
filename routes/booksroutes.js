/** @format */
const express = require("express");
const router = express.Router();
const {
  _getAllBooks,
  _getGenre,
  _getBook,
} = require("../controlers/bookscontrolers");

// To All books
router.get("/all", _getAllBooks);

// To the books
router.get("/:genre", _getGenre);
router.get("/book/:id", _getBook);
// router.get("/search", _searchProducts);

module.exports = router;