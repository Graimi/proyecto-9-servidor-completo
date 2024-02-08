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
  const { id } = req.params;
  const franchise = await getFranchisesByIdFromDB(id);
  res.status(200).json({ data: franchise });
};

const createFranchises = async (req, res, next) => {
  const newFranchise = await createFranchiseInDB({
    name: req.body.name,
  });
  res.status(201).json({ data: newFranchise });
};

const updateFranchiseById = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const franchise = await updateFranchiseInDB(id, { name });
  res.status(200).json({ data: franchise });
};

const deleteFranchise = async (req, res, next) => {
  const { id } = req.params;
  await deleteFranchiseInDB(id);
  res.status(200).json({ data: 'OK' });
};

module.exports = {
  getAllFranchises,
  getFranchisesById,
  createFranchises,
  updateFranchiseById,
  deleteFranchise,
};
