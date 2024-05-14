const { StatusCodes } = require("http-status-codes");
const CostumAPIError = require("./costum-api-error");

class Unauthorized extends CostumAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = Unauthorized;
