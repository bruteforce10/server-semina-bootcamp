const { StatusCodes } = require("http-status-codes");
const CostumAPIError = require("./costum-api-error");

class UnauthenticatedError extends CostumAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
