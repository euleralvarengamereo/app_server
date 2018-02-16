const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  userGroup: {
    type: String,
    required: true,
    lowercase: true
  },
  zone: {
    type: String,
    required: true,
    lowercase: true
  },
  language: {
    type: [],
  },
  domain: {
    type: String,
    required: true,
    lowercase: true,
  },
  lastAccess: {
    type: Number,
    default: Math.round(new Date().getTime()/1000),
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  passwordResetToken: {
    type: String,
    select: false,
  },
  passwordResetExpires: {
    type: Date,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// antes de executar o 'save', encriptar o this.password
UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
