/** @format */

// Rwquiring the database from heroku from the file database.js
const database = require("../database.js");

// Getting from database table products, all of the products in it
const getAllBooks = () => {
  return database("books").select("*").orderBy("book_name");
};

const getGenre = (book_genre) => {
  return database("books")
    .select("*")
    .where({ book_genre: book_genre })
    .orderBy("book_name");
};

// Getting a single book
const getBook = (book_id) => {
  return database("books")
    .select(
      "book_id",
      "book_name",
      "book_price",
      "book_img",
      "book_description",
      "book_author",
      "book_rating",
      "book_genre"
    )
    .where({ book_id: book_id });
};

// Exporting the function getAllPRoduct that gets the products of our ecommerce website
module.exports = {
  getAllBooks,
  getGenre,
  getBook,
};
