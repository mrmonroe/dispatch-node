const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  phone: String,
  email: String,
  address1: String,
  address2: String,
  city: String,
  zipCode: String,
  state: String,
  signature: String,
  role: String,
  created_at: { type: Date, default: Date.now },
  created_by_user: { type: String, default: 'System' },
});

const Users = mongoose.model('Users', usersSchema);

exports = Users;
