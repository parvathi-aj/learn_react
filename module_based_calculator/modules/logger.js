// modules/logger.js
class Logger {
  constructor() {
    this.logs = [];
  }

  log(operation, a, b, result) {
    let timestamp = new Date().toISOString();
    let logEntry = {
      timestamp,
      operation,
      operands: [a, b],
      result,
    };

    this.logs.push(logEntry);
    console.log(`[${timestamp}] ${operation}(${a}, ${b}) = ${result}`);
  }

  getLogs() {
    return this.logs;
  }

  clearLogs() {
    this.logs = [];
    console.log("Logs cleared");
  }

  getLogCount() {
    return this.logs.length;
  }
}

// Export a single instance
export default new Logger();