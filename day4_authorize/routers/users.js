require('dotenv').config();

const express = require('express');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
const users = [
  { username: 'admin', pwd: 'admin', role: 'admin' },
  { username: 'user1', pwd: 'user1', role: 'user' },
];

function verifyToken(req, res, next) {
  // Lấy token từ header
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Thiếu header xác thực!' });
  }
  const schema = authHeader.split(' ')[0];
  const token = authHeader.split(' ')[1]; // Bearer <TOKEN>

  if (token == null) {
    return res
      .status(401)
      .json({ message: 'Không tìm thấy token, xác thực thất bại!' });
  }
  if (schema == 'Bearer') {
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res
          .status(403)
          .json({ message: 'Token không hợp lệ hoặc đã hết hạn!' });
      }
      req.user = user; // Lưu thông tin user từ payload vào request
      next(); // Cho phép request đi tiếp
    });
  } else if (schema == 'Basic') {
    const buff = Buffer.from(token, 'base64');
    const decoded = buff.toString('utf-8'); // username:password
    const [username, password] = decoded.split(':');
    const user = users.find(
      (u) => u.username === username && u.pwd === password
    );
    if (user) {
      req.user = { username: user.username, role: user.role };
      next(); // Cho phép request đi tiếp
    }
  } else {
    return res.status(401).json({ message: 'Header xác thực không hợp lệ!' });
  }
}

userRouter.get('/profile', verifyToken, (req, res) => {
  const userInfo = req.user;
  userInfo ? res.json({ profile: userInfo }) : res.sendStatus(500);
});

module.exports = userRouter;
