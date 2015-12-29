var _ = require('lodash');

module.exports = function () {
  var books = [
  ];

  function updateCollection(isbn, volume) {
    books.push({isbn: isbn, count: volume});
    return Promise.resolve()
  }

  function showCollection() {
    return Promise.resolve(books);
  }

  function checkIsbn(isbn) {
    return Promise.resolve(_.find(books, function (book) {
      return book.isbn == isbn
    }));
  }

  return {
    updateCollection: updateCollection,
    showCollection: showCollection,
    checkIsbn: checkIsbn
  }
};