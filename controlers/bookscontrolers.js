/** @format */

// Requiring the the function getAllProducts located in the modules folder, to get all the products of the website
const { getAllBooks, getGenre, getBook } = require("../models/booksmodels.js");

//Get request to READ all of the books. Could be update, delete, etc (CRUD)
const _getAllBooks = (req, res) => {
  getAllBooks()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

const _getGenre = (req, res) => {
  // changed here
  getGenre(req.params.genre)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

// READ - GET a single book
const _getBook = (req, res) => {
  getBook(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

module.exports = {
  _getAllBooks,
  _getGenre,
  _getBook,
};
