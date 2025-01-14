const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address.'],
  },
  UserID: {
    type: String,
    unique: true,
    sparse: true, // Allows multiple users with TeacherID while having unique StudentIDs
  },
  RestaurantOwnerID: {
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
