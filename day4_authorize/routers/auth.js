require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const authRouter = express.Router();

const users = [
  { username: 'admin', pwd: 'admin', role: 'admin' },
  { username: 'user1', pwd: 'user1', role: 'user' },
];

// API key login route

authRouter.post('/login/key', function (req, res) {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.pwd === password);
  if (user) {
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      apiKey: process.env.API_TOKEN,
    });
  } else {
    return res
      .status(401)
      .json({ success: false, message: 'Invalid credentials' });
  }
});

// JWT login route
const SECRET_KEY = process.env.SECRET_KEY;
authRouter.post('/login/jwt', function (req, res) {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.pwd === password);
  if (user) {
    const payload = { username: user.username, role: user.role };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Token hết hạn sau 1 giờ
    return res.json({
      success: true,
      message: 'Đăng nhập thành công',
      token: token,
    });
  } else {
    res
      .status(401)
      .json({ success: false, message: 'Thông tin đăng nhập không hợp lệ' });
  }
});

module.exports = authRouter;
