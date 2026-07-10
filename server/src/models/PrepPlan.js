const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true
  },
  focus: {
    type: String,
    required: true
  },
  tasks: [{
    type: String
  }],
  resources: [{
    type: String
  }]
});

const prepPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  analysisId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Analysis',
    required: true
  },
  duration: {
    type: Number,
    required: true,
    default: 7
  },
  curriculum: [daySchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PrepPlan', prepPlanSchema);
