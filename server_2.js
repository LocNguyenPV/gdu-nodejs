const express = require('express');
const app = express();

const registrationRouter = express.Router();

registrationRouter.use(function (req, res, next) {
  const params = req.query;
  if (params.age < 18) {
    return res.send('Lông cánh chưa đủ mà bày đặt thi. CÚT !!!');
  }
  next();
});

registrationRouter.use('/:subject', function (req, res, next) {
  const subject = req.params.subject;
  switch (subject) {
    case 'cntt':
      if (req.query.grade < 24) return res.send('Chưa đủ điểm vào ngành CNTT');
      break;
    case 'mkt':
      if (req.query.grade < 22)
        return res.send('Chưa đủ điểm vào ngành Marketing');
      break;
    // case "math":
    //   if (req.query.grade < 25) return res.send("Chưa đủ điểm vào ngành Toán");
    //   break;
  }
  next();
});

registrationRouter.get('/:subject', function (req, res) {
  res.send(
    'Bạn đã đăng ký ngành học: ' +
      req.params.subject +
      '. Chào mừng bạn đến với ngôi trường của chúng tôi!'
  );
});

app.use('/register', registrationRouter);

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Ready to connect on port 3000');
});
