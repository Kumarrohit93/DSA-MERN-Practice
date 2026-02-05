module.exports = (err, req, res, next) => {
  err.statuseCode = err.statuseCode || 500;
  err.status = err.status || "error";

  res.status(err.statuseCode).json({
    status: err.status,
    message: err.message,
  });
};
