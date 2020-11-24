const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.get("/", async (req, res) => {
  try {
    const geting_books_from_db = await Book.find();
    res.json(geting_books_from_db);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  //   console.log(req.body);
  const book_dtl = new Book({
    author: req.body.author,
    bookname: req.body.bookname,
  });
  try {
    const saveBook = await book_dtl.save();
    res.json(saveBook);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:bookId", async (req, res) => {
  try {
    const removeBook = await Book.remove({ _id: req.params.bookId });
    res.json(removeBook);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
