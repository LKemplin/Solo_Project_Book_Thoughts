const BookController = require('../controllers/book.controller');

module.exports = (app) => {
    app.get('/api/books', BookController.displayAll);
    app.post('/api/books/create', BookController.addBook);
    app.get('/api/books/:id', BookController.getBookbyID);
    app.put('/api/books/update/:id', BookController.updateBook);
    app.delete('/api/books/:id', BookController.deleteBook);
}