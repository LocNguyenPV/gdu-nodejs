const User = require('../models/user');
const catchAsync = require('../../utils/catchAsync');

const authen = async (req, res, next) => {
  try {
    console.log('Authenticating user:', req.body.username);
    const users = await User.authen(req.body.username, req.body.password);
    if (users.length === 0) {
      res.status(401).json({
        success: false,
        message: 'Authentication failed: User not found',
      });
      next('User not found');
      return;
    }

    res.status(200).json({
      success: true,
      data: users,
      message: 'Authentication successful',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
    next(error);
  }
};

const register = catchAsync(async (req, res) => {
      console.log('Register user:', req.body);
  const result = await User.create(req.body);
  res.status(201).json({ success: true, message: result });
});

module.exports = { authen, register };
