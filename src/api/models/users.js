const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

const userSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return passwordPattern.test(value);
        },
        message:
          'Password must be at least 6 characters long and contain at least one lowercase and one uppercase letter.',
      },
    },
    email: { type: String, required: true },
    genre: String,
    age: Number,
  },
  { collection: 'users' }
);

userSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
