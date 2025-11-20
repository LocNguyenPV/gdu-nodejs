const express = require('express');
const app = express();
const userRouter = require('./routers/user');
const authRouter = require('./routers/auth');
const logger = require('./utils/logger');
const connectDB = require('./mongo_connect');

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', userRouter);
app.use('/auth', authRouter);

app.use((err, req, res) => {
  // Ghi log lỗi
  logger.error(`${err.name}: ${err.message}`, {
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip,
  });

  // Gửi phản hồi lỗi cho client
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong on the server.',
  });
});

module.exports = app;