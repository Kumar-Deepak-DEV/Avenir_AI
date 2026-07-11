const express = require('express');
const { 
  getUserProfile, 
  getUserHistory, 
  updateUserProfile, 
  updateUserSettings, 
  updateUserPassword 
} = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.put('/settings', protect, updateUserSettings);
router.put('/password', protect, updateUserPassword);
router.get('/history', protect, getUserHistory);

module.exports = router;
