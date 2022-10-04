import winston from "winston";

export const loggerConfig = winston.createLogger({
    transports: [
        new winston.transports.Console({ level: 'info' }),
        new winston.transports.File({ filename: 'warn.log', level: 'warn' }),
        new winston.transports.File({ filename: 'error.log', level: 'error' })
    ]
});

export const logger = (req, res, next) => {
    loggerConfig.log('info', `Url llamada ${req.originalUrl}, método ${req.method}`);
    req.logger = loggerConfig;
    next();
}
