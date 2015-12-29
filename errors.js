function clientError(req, res, next) {
  var err = new Error('not found');
  err.status = 404;
  next(err);
}

function serverError(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).json({message: err});
}

module.exports.clientError = clientError;
module.exports.serverError = serverError;