var jwt = require('jsonwebtoken');

const generateSign = (payload) => {
  const token = jwt.sign({payload}, process.env.JWT_TOKEN_SECRET, { expiresIn: "1h" });
  return token;
};

const verifyToken = (token) => {
  const payload = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
  return payload;
};

module.exports = {
  generateSign,
  verifyToken,
};
