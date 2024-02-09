const { setError } = require('../../config/error');
const {
  getAllFranchisesFromDB,
  getFranchisesByIdFromDB,
  createFranchiseInDB,
  updateFranchiseInDB,
  deleteFranchiseInDB,
} = require('../../repositories/franchises');

const getAllFranchises = async (req, res, next) => {
  const { filter } = req.query;
  const franchise = await getAllFranchisesFromDB(filter);
  res.status(200).json({ data: franchise });
};

const getFranchisesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const franchise = await getFranchisesByIdFromDB(id);
    res.status(200).json({ data: franchise });
  } catch (error) {
    return next(setError(400, 'Not able to get franchise 🙃'));
  }
};

const createFranchises = async (req, res, next) => {
  try {
    const newFranchise = await createFranchiseInDB({
      name: req.body.name,
    });
    res.status(201).json({ data: newFranchise });
  } catch (error) {
    return next(setError(400, 'Not able to create franchise 🙃'));
  }
};

const updateFranchiseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const franchise = await updateFranchiseInDB(id, { name });
    res.status(200).json({ data: franchise });
  } catch (error) {
    return next(setError(400, 'Not able to update franchise 🙃'));
  }
};

const deleteFranchise = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteFranchiseInDB(id);
    res.status(200).json({ data: 'OK' });
  } catch (error) {
    return next(setError(400, 'Not able to delete franchise 🙃'));
  }
};

module.exports = {
  getAllFranchises,
  getFranchisesById,
  createFranchises,
  updateFranchiseById,
  deleteFranchise,
};
