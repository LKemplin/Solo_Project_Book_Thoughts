const Book = require('../models/book.model');

module.exports.addBook = (req, res) => {
    Book.create(req.body)
    .then(book => {
        console.log(book)
        res.json(book)
    }).catch((err) => {
        res.status(400).json({message: 'Something went wrong with create', error: err.errors})
    })
}

module.exports.displayAll = (req, res) => {
    Book.find({})
    .then((allBooks) => {
        console.log(allBooks)
        res.json(allBooks)
    }).catch((err) => {
        res.status(400).json({message: "Something went wrong with displayAll", error: err.errors})
    })
}

module.exports.getBookbyID = (req, res) => {
    Book.findOne({_id: req.params.id})
    .then((book) => {
        console.log(book)
        res.json(book)
    }).catch((err) => {
        res.status(400).json({message: "Something went wrong with findOne", error: err.errors})
    })
}

module.exports.updateBook = (req, res) => {
    Book.findOneAndUpdate({_id: req.params.id,}, req.body, {new: true, runValidators: true})
    .then((updatedBook) => {
        console.log(updatedBook)
        res.json(updatedBook)
    }).catch((err) => {
        res.status(400).json({message: "Something went wrong with update", error: err.errors})
    })
}

module.exports.deleteBook = (req, res) => {
    Book.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch((err) => {
        res.status(400).json({message: "Something went wrong with delete", error: err.errors})
    })
}