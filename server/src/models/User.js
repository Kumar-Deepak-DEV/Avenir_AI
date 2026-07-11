const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email address'],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address',
      ],
    },
    password: {
      type: String,
      required: function () {
        return this.authProvider === 'local';
      },
      minlength: 6,
      select: false, 
    },
    authProvider: {
      type: String,
      enum: ['local', 'google', 'github'],
      default: 'local',
    },
    providerId: {
      type: String, 
      default: null,
    },
    isEmailVerified: {
      type: Boolean,
      default: false, 
    },
    currentRole: {
      type: String,
      default: '',
    },
    targetRole: {
      type: String,
      default: '',
    },
    photoUrl: {
      type: String,
      default: '',
    },
    settings: {
      compactMode: { type: Boolean, default: false },
      theme: { type: String, default: 'light' },
      language: { type: String, default: 'English (US)' },
      timezone: { type: String, default: '(GMT+5:30) India Standard Time' },
      emailNotifications: { type: Boolean, default: true },
      interviewReminders: { type: Boolean, default: true },
      weeklyProgressReport: { type: Boolean, default: false },
      marketingEmails: { type: Boolean, default: false },
      twoFactorAuth: { type: Boolean, default: false },
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function () {
  if (!this.isModified('password') || !this.password) {
    return;
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  if (!this.password) return false; 
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
