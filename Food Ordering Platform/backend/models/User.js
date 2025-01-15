const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address.'],
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    unique: true,
    sparse: true, // Allows multiple users with TeacherID while having unique StudentIDs
  },
  restaurantOwnerID: {
    type: String,
    unique: true,
    sparse: true, // Allows multiple users with StudentID while having unique TeacherIDs
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'restaurantOwner'],
    default: 'user',
  },
});

module.exports = mongoose.model('User', UserSchema);
