const { SciFiArtifact } = require('../api/models/sciFiArtifacts');
const { Franchise } = require('../api/models/franchises');
const { deleteFile } = require('../middlewares/deleteFile');

const getSciFiArtifactAndRelatedFromDB = async (id) => {
  const sciFiArtifact = await SciFiArtifact.findById(id).populate(
    'franchiseId'
  );
  return sciFiArtifact;
};

const getFranchiseAndRelatedFromDB = async (id) => {
  const franchise = await Franchise.findById(id).populate('artifacts');
  return franchise;
};

const updateFranchiseofScifiArtifactInDB = async (id, payload, file) => {
  const sciFiArtifact = await SciFiArtifact.findById(id).populate('franchiseId');
  const oldFranchise = await Franchise.findById(sciFiArtifact.franchiseId.id);

  const newFranchiseData = payload;

  if (file) {
    newFranchiseData.image = file.path;
    if (oldFranchise.image) {
      deleteFile(oldFranchise.image);
    }
  }
  
  delete newFranchiseData._id;

  const franchisedUpdated = await Franchise.findByIdAndUpdate(
    sciFiArtifact.franchiseId.id,
    newFranchiseData,
    { new: true }
  ).populate('artifacts');

  return franchisedUpdated;
};

const updateScifiArtifactsInFranchiseinDB = async (id, payload) => {
  const franchise = await Franchise.findByIdAndUpdate(id, payload, {
    new: true,
  }).populate('artifacts');

  return franchise;
};

module.exports = {
  getSciFiArtifactAndRelatedFromDB,
  getFranchiseAndRelatedFromDB,
  updateFranchiseofScifiArtifactInDB,
  updateScifiArtifactsInFranchiseinDB,
};
