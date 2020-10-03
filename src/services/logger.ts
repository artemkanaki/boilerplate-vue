import { createLogger, transports, format } from 'winston';

export const logger = createLogger({
    level: 'debug',
    transports: [
        new transports.Console({ format: format.colorize() }),
    ],
});
