// import http-status-codes
const { StatusCodes } = require("http-status-codes");
// import custom-api
const CustomAPIError = require("./costum-api-error");

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
module.exports = BadRequest;
