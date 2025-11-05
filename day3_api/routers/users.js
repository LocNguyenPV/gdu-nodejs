require('dotenv').config();

const express = require('express');
const userRouter = express.Router();

const path = require('path');
const DATA_FILE = path.join(__dirname, 'data');
const data = require(DATA_FILE);

function checkAPIKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  // Kiểm tra xem apiKey có tồn tại và hợp lệ không
  if (apiKey && apiKey === process.env.API_TOKEN) {
    // Nếu hợp lệ, cho phép request đi tiếp
    next();
  } else {
    // Nếu không hợp lệ, trả về lỗi 401 Unauthorized
    res
      .status(401)
      .json({ message: 'Unauthorized: Invalid or missing API Key.' });
  }
}

userRouter.get('/information', checkAPIKey, function (req, res) {
  const username = req.query.username;
  if (!username) {
    return res.send('Thiếu tham số username');
  }
  const response = data.find((item) => item.username === username);
  if (!response) {
    return res.send('Không tìm thấy user');
  }
  res.status(200).json({ success: true, data: response.subjects });
});

userRouter.post('/', function (req, res) {
  const body = req.body;
  // const header = req.headers;
  // console.log("Headers: ", header);
  res.status(200).json({ body });
});

module.exports = userRouter;
