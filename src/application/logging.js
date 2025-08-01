import winston from 'winston';
import { transports } from "winston";

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new transports.Console({}),
  ]
});