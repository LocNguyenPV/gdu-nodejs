const winston = require('winston');

// Định nghĩa các cấp độ log và màu sắc tương ứng
const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const logColors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(logColors);

// Định dạng cho log
const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

// Định nghĩa các nơi sẽ gửi log đến (transports)
const transports = [
  // Ghi log ra console
  new winston.transports.Console(),
  // Ghi các lỗi ra file error.log
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  // Ghi tất cả các log ra file combined.log
  new winston.transports.File({ filename: 'logs/combined.log' }),
];

// Tạo logger
const logger = winston.createLogger({
  level: 'debug', // Ghi log từ cấp độ 'debug' trở lên
  levels: logLevels,
  format,
  transports,
});

module.exports = logger;