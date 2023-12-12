const { AppError, HttpCode } = require("../exception/ApprError");
// const MESSAGES = require("../messages");
// const logger = require("../helpers/logger");

class ErrorHandler {
  handleError(error, response) {
    if (this.isTrustedError(error) && response) {
      this.handleTrustedError(error, response);
    } else {
      this.handleUntrustedError(error, response);
    }
  }

  isTrustedError(error) {
    if (error instanceof AppError) {
      return error.isOperational;
    }

    return false;
  }

  handleTrustedError(error, response) {
    response.status(error.httpCode).json({ message: error.message });
  }

  handleUntrustedError(error, response) {
    if (response) {
      //   logger.error(error);
      response.status(HttpCode.INTERNAL_SERVER_ERROR).json({
        message:
          "Un problème est survenu. S’il persiste, veuillez nous contacter.",
      });
    }
  }
}

module.exports = new ErrorHandler();
