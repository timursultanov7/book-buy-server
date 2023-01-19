/** @format */

//Requiring the express node.js package to create the server
const express = require("express");

const books_router = require("./routes/booksroutes.js");

const users_router = require("./routes/users.js");
// const order_router = require("./routes/orders.js");
// const users_router = require("./routes/users.js");

// Creating the server
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());
// Listenting to the port 9000 in localhost
app.listen(process.env.PORT || 9000, () => {
  console.log(`listen on port ${process.env.PORT}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/books", books_router);

app.use("/api/auth", users_router);

app.use(express.static(__dirname + "/public"));
