const User = require('../models/User');
const Analysis = require('../models/Analysis');
const MockInterview = require('../models/MockInterview');
const Resume = require('../models/Resume');

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        authProvider: user.authProvider,
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserHistory = async (req, res) => {
  try {
    const userId = req.user._id;

    const analyses = await Analysis.find({ user: userId }).sort({ createdAt: -1 });
    const sessions = await MockInterview.find({ user: userId }).sort({ createdAt: -1 });
    const versions = await Resume.find({ user: userId }).sort({ createdAt: -1 });

    res.json({
      analyses,
      sessions,
      versions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserProfile,
  getUserHistory,
};
