const { User } = require('../api/models/users');
const { setError } = require('../config/error');
const { verifyToken } = require('../config/jwt');

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return next(setError(401, 'Not authorized 🙃'));
    }

    const parsedToken = token.replace('Bearer ', '');
    const validToken = verifyToken(parsedToken);
    const userLogued = await User.findById(validToken.id);

    req.user = userLogued;
    next();
  } catch (error) {
    return next(setError(401, 'Token incorrect 🙃'));
  }
};

module.exports = { isAuth };
