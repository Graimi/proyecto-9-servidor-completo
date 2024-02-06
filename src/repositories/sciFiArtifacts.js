const { SciFiArtifact } = require('../../src/models/mongo');

const getAllSciFiArtifactsFromDB = async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') },
  };
  const sciFiArtifact = await SciFiArtifact.find(
    filter ? nameFilterOptions : {}
  );
  return sciFiArtifact;
};

const getSciFiArtifactsByIdFromDB = async (id) => {
  const sciFiArtifact = await SciFiArtifact.findById(id);
  return sciFiArtifact;
};

const createSciFiArtifactInDB = async (payload) => {
  const newSciFiArtifact = new SciFiArtifact(payload);
  await newSciFiArtifact.save();
  return newSciFiArtifact;
};

const updateSciFiArtifactInDB = async (id, payload) => {
  const sciFiArtifact = await SciFiArtifact.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return sciFiArtifact;
};

const deleteSciFiArtifactInDB = async (id) => {
  await SciFiArtifact.deleteOne({ _id: id });
};

module.exports = {
  getAllSciFiArtifactsFromDB,
  getSciFiArtifactsByIdFromDB,
  createSciFiArtifactInDB,
  updateSciFiArtifactInDB,
  deleteSciFiArtifactInDB,
};
