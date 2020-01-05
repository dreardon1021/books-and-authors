var Book = require('./book.js');

class Author {
  constructor(authorObj) {
    this.first = authorObj.first;
    this.last = authorObj.last;
    this.books = [];
  };
  write (title, date) {
    var newBook = new Book(this.first, this.last, title, date);
    this.books.push(newBook);
    return newBook;
  };
};

module.exports = Author;
