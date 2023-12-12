const { StatusCodes } = require("http-status-codes");

const HttpCode = {
  OK: StatusCodes.OK,
  CREATED: StatusCodes.CREATED,
  NO_CONTENT: StatusCodes.NO_CONTENT,
  NOT_FOUND: StatusCodes.NOT_FOUND,
  BAD_REQUEST: StatusCodes.BAD_REQUEST,
  UNAUTHORIZED: StatusCodes.UNAUTHORIZED,
  INTERNAL_SERVER_ERROR: StatusCodes.INTERNAL_SERVER_ERROR,
  CONFLICT: StatusCodes.CONFLICT,
};

class AppError extends Error {
  name;
  httpCode;
  isOperational = true;

  constructor(args) {
    super(args.description);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = args.name || "Error";
    this.httpCode = args.httpCode;

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}

module.exports = {
  HttpCode,
  AppError,
};
