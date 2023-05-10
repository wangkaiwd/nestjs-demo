import winston, { createLogger, format, Logger } from 'winston';

class LoggerService extends Logger {
  constructor() {
    super({
      level: 'info',
      format: format.combine(format.timestamp(), format.prettyPrint()),
      transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.Console(),
      ],
    });
  }
}

export default LoggerService;
