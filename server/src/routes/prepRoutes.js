const express = require('express');
const router = express.Router();
const { generatePlan, getPlan, getPlanByAnalysis } = require('../controllers/prepController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/generate', protect, generatePlan);
router.get('/:id', protect, getPlan);
router.get('/analysis/:analysisId', protect, getPlanByAnalysis);

module.exports = router;
