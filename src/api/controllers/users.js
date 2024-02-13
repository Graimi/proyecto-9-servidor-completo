const { setError } = require('../../config/error');
const { registerUserInDB, loginUserInDB } = require('../../repositories/users');

const registerUser = async (req, res, next) => {
  try {
    const newUser = await registerUserInDB(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    return next(setError(400, 'Not able to register 🙃'));
  }
};

const loginUser = async (req, res, next) => {
  try {
    const user = await loginUserInDB(req.body);
    return res.status(200).json(user);
  } catch (error) {
    return next(setError(400, 'Not able to login 🙃'));
  }
};

module.exports = {
  registerUser,
  loginUser,
};
