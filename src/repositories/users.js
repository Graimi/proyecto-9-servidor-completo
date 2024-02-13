const { User } = require('../api/models/users');

const getAllUsersFromDB = async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') },
  };
  const user = await User.find(filter ? nameFilterOptions : {});
  return user;
};

const registerUserInDB = async (payload) => {
  const newUser = new User(payload);
  await newUser.save();
  return newUser;
};

module.exports = {
  getAllUsersFromDB,
  registerUserInDB,
  //   loginUser,
};
