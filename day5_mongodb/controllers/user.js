const User = require('../models/user');
const comparePassword = require('../utils/hashing').comparePassword;
const generateToken = require('../utils/jwt').generateToken;
const catchAsync = require('../utils/catchAsync');
const authenUser = async (req, res, next) => {
  try {
    const user = await User.findOne({username: req.body.username});
    if(!user) {
        res.status(401).json({ success: false, message: 'Authentication failed: User not found' });
        next("User not found");
        return;
    }
    if(!(await comparePassword(req.body.password, user.password))) {
        res.status(401).json({ success: false, message: 'Authentication failed: Wrong password' });
        return;
    }
    const token = generateToken({ username: user.username, role: user.role });
    res.status(200).json({ success: true, message: 'Authentication successful', token: token });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
    next(error);
  }
};

const registerUser = catchAsync(async (req, res) => {
  const { username, password, role } = req.body;
  const newUser = new User({ username, password, role });
  await newUser.save();
  res.status(201).json({ success: true, message: 'User registered successfully' });
});

module.exports = { authenUser, registerUser };