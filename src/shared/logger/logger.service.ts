import winston, { format, Logger, createLogger } from 'winston';

interface LogMethodOptions {
  ctx?: any;
  message: string;
  meta?: Record<string, any>;
}

class LoggerService {
  logger: Logger;
  context?: string;

  constructor() {
    this.logger = createLogger({
      level: 'info',
      format: format.combine(format.timestamp(), format.prettyPrint()),
      transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.Console(),
      ],
    });
  }

  setContext(context: string) {
    this.context = context;
  }

  error(options: LogMethodOptions) {
    return this.logger.error({
      ...options,
      contextName: this.context,
    });
  }

  deubg(options: LogMethodOptions) {
    return this.logger.debug({
      ...options,
      contextName: this.context,
    });
  }

  warn(options: LogMethodOptions) {
    return this.logger.warn({
      ...options,
      contextName: this.context,
    });
  }

  info(options: LogMethodOptions) {
    return this.logger.info({
      ...options,
      contextName: this.context,
    });
  }
}

export default LoggerService;
