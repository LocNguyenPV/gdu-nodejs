const express = require("express");
const userRouter = express.Router();
const path = require('path');
const DATA_FILE = path.join(__dirname, 'data');
const { writeData } = require('../../utils/fs');
const data = require(DATA_FILE);

userRouter.get("/",function (req, res) {
  const username = req.query.username;
  if (!username) {
    return res.send("Thiếu tham số username");
  }
  const response = data.find(item => item.username === username);
  if (!response) {
    return res.send("Không tìm thấy user");
  }
    res.status(200).json({ success: true, data: response.subjects });
});

userRouter.post("/", function (req, res) {
    const body = req.body;
    res.status(200).json({body});
});


module.exports = userRouter;