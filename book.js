class Book {
  constructor(first, last, title, publicationYear,) {
    this.title = title;
    this.publicationYear = publicationYear;
    this.author = `${first} ${last}`;
  };
};

module.exports = Book;
