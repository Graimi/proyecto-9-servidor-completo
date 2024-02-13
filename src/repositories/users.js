const { User } = require('../api/models/users');
const bcrypt = require('bcrypt');
const { generateSign } = require('../config/jwt');

const registerUserInDB = async (payload) => {
  try {
    const newUser = new User(payload);
    const emailDuplicate = await User.findOne({ email: payload.email });

    if (emailDuplicate) {
      return 'This email already exists 🙃';
    }

    await newUser.save();
    return newUser;
  } catch (error) {
    // Capturamos el mensaje de error de la contraseña
    return error.message;
  }
};

const loginUserInDB = async (payload) => {
  const userEmail = await User.findOne({ email: payload.email });
  if (!userEmail) {
    return 'This email does not exists 🙃';
  }
  if (bcrypt.compareSync(payload.password, userEmail.password)) {
    const token = generateSign(userEmail._id);
    return { userEmail, token };
  } else {
    return 'The password is incorrect 🔒';
  }
};

module.exports = {
  registerUserInDB,
  loginUserInDB,
};
