import { createLogger, format, transports } from 'winston';

const formatter = format.combine(
  format.colorize(),
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.splat(),
  format.printf((info) => {
    const { timestamp, level, message } = info;
    return `${timestamp} [${level}]: ${message}`;
  })
);

class LoggerClass {
  loggerInfo;

  loggerError;

  constructor() {
    this.loggerInfo = createLogger({
      level: 'info',
      format: format.combine(format.timestamp(), format.json()),
      transports: [
        new transports.Console({ format: formatter }),
        new transports.File({
          filename: 'logs/info.log',
        }),
      ],
    });
    this.loggerError = createLogger({
      level: 'error',
      format: format.combine(format.timestamp(), format.json()),
      transports: [
        new transports.Console({ format: formatter }),
        new transports.File({
          filename: 'logs/error.log',
        }),
      ],
    });
  }

  info(msg: string): void {
    this.loggerInfo.info(msg);
  }

  error(msg: string): void {
    this.loggerError.error(msg);
  }
}

export const logger = new LoggerClass();
