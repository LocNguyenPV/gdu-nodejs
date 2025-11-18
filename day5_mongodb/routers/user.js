require('dotenv').config();
const express = require('express');
const userRouter = express.Router();
const user = require('../controllers/user');
const verifyToken = require('../utils/jwt').verifyToken;

function verify(req, res, next) {
  // Lấy token từ header
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Thiếu header xác thực!' });
  }

  const schema = authHeader.split(' ')[0];
  const token = authHeader.split(' ')[1];

  if (token == null) {
    return res
      .status(401)
      .json({ message: 'Không tìm thấy token, xác thực thất bại!' });
  }
  if (schema == 'Bearer') {
    const result = verifyToken(token);
    if (!result.valid) {
      next(result.error);
      return res
        .status(401)
        .json({ message: 'Token không hợp lệ hoặc đã hết hạn!' });
    }
    req.user = result.decoded;
    next();
  } else {
    return res.status(401).json({ message: 'Header xác thực không hợp lệ!' });
  }
}

userRouter.get('/profile', verify, (req, res) => {
  const userInfo = req.user;
  userInfo ? res.json({ profile: userInfo }) : res.sendStatus(500);
});

userRouter.post('/register', user.registerUser);

module.exports = userRouter;
