const Log = require("log");

/**
 * Initial logger instance
 */
class Logger {

  constructor() {
    this.logger = new Log("info");
  }

  get() {
    return this.logger;
  }
}

const logger = new Logger();

/**
 * Return the logger
 */
module.exports = logger.get();
