const { User } = require('../api/models/models');

const getAllUsersFromDB = async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') },
  };
  const user = await User.find(filter ? nameFilterOptions : {});
  return user;
};

// const getUsersByIdFromDB = async (id) => {
//   const User = await User.findById(id);
//   return User;
// };

// const createUserInDB = async (payload) => {
//   const newUser = new User(payload);
//   await newUser.save();
//   return newUser;
// };

// const updateUserInDB = async (id, payload) => {
//   const User = await User.findByIdAndUpdate(id, payload, {
//     new: true,
//   });
//   return User;
// };

// const deleteUserInDB = async (id) => {
//   await User.deleteOne({ _id: id });
// };

module.exports = {
  getAllUsersFromDB,
};
