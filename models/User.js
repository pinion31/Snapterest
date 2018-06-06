const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: String,
    password: String,
    email: String,
    city: String,
    state: String,
  }
);

const User = mongoose.model('snapUsers', UserSchema);

module.exports = User;