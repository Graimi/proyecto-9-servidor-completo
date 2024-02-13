const { User } = require('../api/models/users');

const getAllUsersFromDB = async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') },
  };
  const user = await User.find(filter ? nameFilterOptions : {});
  return user;
};

const registerUserInDB = async (payload) => {
  try {
    const newUser = new User(payload);
    const emailDuplicate = await User.findOne({ email: payload.email });

    if (emailDuplicate) {
      throw new Error('This email already exists 🙃');
    }

    await newUser.save();
    return newUser;
  } catch (error) {
    // Capturamos el mensaje de error de la contraseña
    return error.message.substring(34);
  }
};

module.exports = {
  getAllUsersFromDB,
  registerUserInDB,
  //   loginUser,
};
