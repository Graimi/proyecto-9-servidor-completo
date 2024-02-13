const express = require('express');
const { registerUser, loginUser } = require('../controllers/users');

const usersRouter = express.Router();

usersRouter.post('/auth/register', registerUser);
usersRouter.post('/auth/login', loginUser);

module.exports = usersRouter;
