module.exports = function (db) {

  function showStock(_, res, next) {
    db.showCollection()
      .then(function (docs) {
        res.json(docs);
      })
      .catch(function (err) {
        console.log("Error: ", err);
        next();
      });
  }

  function updateStock(req, res) {
    var isbn = parseInt(req.body.isbn);
    var count = parseInt(req.body.count);
    db.updateCollection(isbn, count);
    res.status(200).json({isbn: isbn, count: count});
  }

  function checkIsbn(req, res, next) {
    var isbn = parseInt(req.params.isbn);
    db.checkIsbn(isbn)
      .then(function (docs) {
        res.status(200).json(docs);
      }).catch(function () {
        next();
      })

  }

  return {
    showStock: showStock,
    checkIsbn: checkIsbn,
    updateStock: updateStock
  }
}


