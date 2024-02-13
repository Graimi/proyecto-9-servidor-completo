const express = require('express');
const { registerUser, loginUser, avatarUser } = require('../controllers/users');
const { isAuth } = require('../../middlewares/auth');
const upload = require('../../middlewares/file');

const usersRouter = express.Router();

usersRouter.post('/auth/register', registerUser);
usersRouter.post('/auth/login', loginUser);
usersRouter.post(
  '/auth/avatar/:id',
  [isAuth],
  upload.single('avatar'),
  avatarUser
);

module.exports = usersRouter;
