const { setError } = require('../../config/error');
const {
  getAllUsersFromDB,
  registerUserInDB,
} = require('../../repositories/users');

const getAllUsers = async (req, res, next) => {
  const { filter } = req.query;
  const user = await getAllUsersFromDB(filter);
  res.status(200).json({ data: user });
};

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
  } catch (error) {
    return next(setError(400, 'Not able to login 🙃'));
  }
};

//   const getUsersById = async (req, res, next) => {
//     const { id } = req.params;
//     const User = await getUsersByIdFromDB(id);
//     res.status(200).json({ data: User });
//   };

//   const createUsers = async (req, res, next) => {
//     const newUser = await createUserInDB({ name: req.body.name });
//     res.status(201).json({ data: newUser });
//   };

//   const updateUserById = async (req, res, next) => {
//     const { id } = req.params;
//     const { name } = req.body;
//     const User = await updateUserInDB(id, { name });
//     res.status(200).json({ data: User });
//   };

//   const deleteUser = async (req, res, next) => {
//     const { id } = req.params;
//     await deleteUserInDB(id);
//     res.status(200).json({ data: 'OK' });
//   };

module.exports = {
  getAllUsers,
  registerUser,
};
