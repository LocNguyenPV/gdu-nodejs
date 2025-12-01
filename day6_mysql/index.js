const express = require('express');
const app = express();
const userRouterV1 = require('./v1/routers/user');
const userRouterV2 = require('./v2/routers/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  // Log lỗi
  console.error(`${err.name}: ${err.message}`, {
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

app.use('/v1/users', userRouterV1);
app.use('/v2/users', userRouterV2);

module.exports = app;
