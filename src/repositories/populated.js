const { SciFiArtifact, Franchise } = require('../api/models/models');

const getSciFiArtifactAndRelatedFromDB = async (id) => {
  const sciFiArtifact = await SciFiArtifact.findById(id).populate({
    path: 'franchiseId',
  });
  return sciFiArtifact;
};

const getFranchiseAndRelatedFromDB = async (id) => {
  const franchise = await Franchise.findById(id).populate({
    path: 'artifacts',
  });
  return franchise;
};

const updateFranchiseofScifiArtifactInDB = async (id, payload) => {
  const sciFiArtifact = await SciFiArtifact.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return sciFiArtifact;
};

const updateScifiArtifactsInFranchiseinDB = async (id, payload) => {
  const franchise = await Franchise.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return franchise;
};

module.exports = {
  getSciFiArtifactAndRelatedFromDB,
  getFranchiseAndRelatedFromDB,
  updateFranchiseofScifiArtifactInDB,
  updateScifiArtifactsInFranchiseinDB,
};
