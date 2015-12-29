var MongoClient = require('mongodb').MongoClient;

module.exports = function (url) {
  var collection = MongoClient.connect(url).then(function (db) {
    return db.collection('books');
  });

  function updateCollection(isbn, volume) {
    return collection
      .then(function (collection) {
        collection.updateOne(
          {"isbn": isbn},
          {
            isbn: isbn,
            count: volume
          },
          {upsert: true})
      });
  }

  function showCollection() {
    return collection
      .then(function (collection) {
        return collection.find({}).toArray();
      });
  }

  function checkIsbn(isbn) {
    return collection.then(function(collection) {
      return collection.find({"isbn": isbn}).toArray()
    });
  }

  return {
    updateCollection: updateCollection,
    showCollection: showCollection,
    checkIsbn: checkIsbn
  }
};