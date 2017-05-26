/*jshint esversion: 6*/
const express        = require("express");
const authController = express.Router();


// Our user model
const Book          = require("../model/book");
const upload = require('../config/multer');
const bookRoute = express.Router();

bookRoute.post('/', function(req, res, next) {
  console.log(req.body);
  const book = new Book ({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  });

  book.save((err, book) => {
    if (err) {
      return res.json(err);
    }

    return res.json({
      book: book
    });
  });
});

 module.exports = bookRoute;
