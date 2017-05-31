/*jshint esversion: 6*/
const express = require("express");
const authController = express.Router();


// Our user model
const Book = require("../model/book");
const upload = require('../config/multer');
const bookRoute = express.Router();
bookRoute.post('/', function(req, res, next) {
  console.log(req.body);
  const book = new Book({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price

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

bookRoute.get("/", (req, res, next) => {
  Book.find({}, function(err, book) {
    if (err) {
      return res.json(err);
    }
    return res.json(book);
  });
});

bookRoute.get("/:id",(req, res, next) => {
  Book.findById(req.params.id).then( book =>{
    res.status(200).json(book);
  })
  .catch( err => res.status(500).json({message:err,error:true}) );
});

module.exports = bookRoute;
