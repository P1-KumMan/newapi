const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

router.get('/', async (req, res) => {
    try {
        const geting_books_from_db = await Book.find()
        res.json(geting_books_from_db)
    } catch (err) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    //   console.log(req.body);
    const book_dtl = new Book({
        author: req.body.author,
        bookname: req.body.bookname,
    })
    try {
        const saveBook = await book_dtl.save()
        res.json(saveBook)
    } catch (err) {
        res.json({ message: err })
    }
})

router.delete('/:bookId', async (req, res) => {
    try {
        const removeBook = await Book.remove({ _id: req.params.bookId })
        res.json(removeBook)
    } catch (err) {
        res.json({ message: err })
    }
})

router.get('/count', async (req, res) => {
    try {
        const authors_from_books_db = await Book.find()
        let authors = []
        authors = authors_from_books_db.map((data) => {
            return data.author
        })
        authors.sort()
        count = {}
        // res.json(authors)
        authors.forEach((i) => {
            count[i] = (count[i] || 0) + 1
        })
        res.json(count)
    } catch (err) {
        res.json(err)
    }
})

router.patch('/:bookId', async (req, res) => {
    try {
        console.log(req.body)
        const updateBookname = await Book.updateOne(
            { _id: req.params.bookId },
            { $set: { bookname: req.body.bookname, author: req.body.author } }
        )
        res.json(updateBook)
    } catch (err) {
        res.json({ message: err })
    }
    console.log(req.params.bookId)
})

module.exports = router
