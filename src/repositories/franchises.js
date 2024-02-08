const { Franchise } = require('../api/models/mongo');

const getAllFranchisesFromDB = async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') },
  };
  const franchise = await Franchise.find(filter ? nameFilterOptions : {});
  return franchise;
};

const getFranchisesByIdFromDB = async (id) => {
  const franchise = await Franchise.findById(id);
  return franchise;
};

const createFranchiseInDB = async (payload) => {
  const newFranchise = new Franchise(payload);
  await newFranchise.save();
  return newFranchise;
};

const updateFranchiseInDB = async (id, payload) => {
  const franchise = await Franchise.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return franchise;
};

const deleteFranchiseInDB = async (id) => {
  await Franchise.deleteOne({ _id: id });
};

module.exports = {
  getAllFranchisesFromDB,
  getFranchisesByIdFromDB,
  createFranchiseInDB,
  updateFranchiseInDB,
  deleteFranchiseInDB,
};
