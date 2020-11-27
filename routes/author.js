const express = require("express");
const router = express.Router();
const Author = require("../models/Author");
const Book = require("../models/Book");

router.get("/", async (req, res) => {
  try {
    const geting_authors_from_db = await Author.find();
    res.json(geting_authors_from_db);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const addauthor = new Author({
    author: req.body.author,
  });
  try {
    const saveAuthor = await addauthor.save();
    res.json(saveAuthor);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:authorId", async (req, res) => {
  try {
    const removeAuthor = await Author.remove({ _id: req.params.authorId });
    res.json(removeAuthor);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch('/:authorId', async (req, res) => {
    try {
        console.log(req.body)
        const updateauthor = await Book.updateOne(
            { _id: req.params.authorId },
            { $set: { author: req.body.author } }
        )
        res.json(updateauthor)
    } catch (err) {
        res.json({ message: err })
    }
    console.log(req.params.author)
})
module.exports = router;
