const express = require('express');
const registerRouter = express.Router();

registerRouter.use(function (req, res, next) {
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
      if (req.query.grade < 24) {
        res.send('Chưa đủ điểm vào ngành CNTT');
      }
      break;
    case 'mkt':
      if (req.query.grade < 22) {
        res.send('Chưa đủ điểm vào ngành Marketing');
      }
      break;
  }
  next();
});

registerRouter.get('/:subject', function (req, res) {
  res.send(
    'Bạn đã đăng ký ngành học: ' +
      req.params.subject +
      '. Chào mừng bạn đến với ngôi trường của chúng tôi!'
  );
});

module.exports = registerRouter;
