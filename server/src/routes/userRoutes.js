const express = require('express');
const { getUserProfile, getUserHistory } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.get('/history', protect, getUserHistory);

module.exports = router;
