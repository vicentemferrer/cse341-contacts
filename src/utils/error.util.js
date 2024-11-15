class AppError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function handleErrors(fn) {
  return (req, res, next) => {
    // #swagger.tags = ['Contacts']
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
}

module.exports = {
  AppError,
  handleErrors
};
