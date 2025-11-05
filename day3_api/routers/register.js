const express = require('express');
const registerRouter = express.Router();
const path = require('path');
const DATA_FILE = path.join(__dirname, 'data');
const { writeData } = require('../../utils/fs');
const data = require(DATA_FILE);

const validation = (req, res, next) => {
  const params = req.query;
  const subject = req.params.subject || 'cntt';
  if (!params.age || !params.grade) {
    return res.send('Thiếu tham số. Vui lòng nhập đầy đủ thông tin');
  }
  if (params.age < 18) {
    return res.send('Lông cánh chưa đủ mà bày đặt thi. CÚT !!!');
  }
  switch (subject) {
    case 'cntt':
      req.query.grade < 24 && res.send('Chưa đủ điểm vào ngành CNTT');
    case 'mkt':
      req.query.grade < 22 && res.send('Chưa đủ điểm vào ngành Marketing');
  }
  next();
};

registerRouter
  .route('/:subject')
  // .all(validation)
  .post(function (req, res) {
    res.send(
      'Bạn đã đăng ký ngành học: ' +
        req.params.subject +
        '. Chào mừng bạn đến với ngôi trường của chúng tôi!'
    );
  })
  .put(function (req, res) {
    res.send(
      'Bạn đã cập nhật đăng ký ngành học: ' +
        req.params.subject +
        '. Chào mừng bạn đến với ngôi trường của chúng tôi!'
    );
  })
  .delete(function (req, res) {
    res.send(
      'Bạn đã hủy đăng ký ngành học: ' +
        req.params.subject +
        '. Chào mừng bạn đến với ngôi trường của chúng tôi!'
    );
  });

module.exports = registerRouter;
