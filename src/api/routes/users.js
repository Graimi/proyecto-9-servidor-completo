const express = require('express');
const { getAllUsers, registerUser } = require('../controllers/users');

const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);
usersRouter.post('/register', registerUser);
// usersRouter.get('/:id', getusersById);
// usersRouter.post('/', createusers);
// usersRouter.put('/:id', updateUserById);
// usersRouter.delete('/:id', deleteUser);

module.exports = usersRouter;
