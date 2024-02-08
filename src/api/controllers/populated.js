const {
  getSciFiArtifactAndRelatedFromDB,
  getFranchiseAndRelatedFromDB,
  updateFranchiseofScifiArtifactInDB,
  updateScifiArtifactsInFranchiseinDB,
} = require('../../repositories/populated');

const getSciFiArtifactAndRelated = async (req, res, next) => {
  const { id } = req.params;
  const sciFiArtifactAndRelated = await getSciFiArtifactAndRelatedFromDB(id);
  const response = {
    _id: sciFiArtifactAndRelated._id,
    name: sciFiArtifactAndRelated.name,
    description: sciFiArtifactAndRelated.description,
    type: sciFiArtifactAndRelated.type,
    powers: sciFiArtifactAndRelated.powers,
    franchise: {
      _id: sciFiArtifactAndRelated.franchiseId._id,
      name: sciFiArtifactAndRelated.franchiseId.name,
      genre: sciFiArtifactAndRelated.franchiseId.genre,
      establishedYear: sciFiArtifactAndRelated.franchiseId.establishedYear,
      artifacts: sciFiArtifactAndRelated.franchiseId.artifacts,
    },
  };
  res.status(200).json({ data: response });
};

const getFranchiseAndRelated = async (req, res, next) => {
  const { id } = req.params;
  const franchiseAndRelated = await getFranchiseAndRelatedFromDB(id);
  const response = {
    _id: franchiseAndRelated._id,
    name: franchiseAndRelated.name,
    description: franchiseAndRelated.description,
    genre: franchiseAndRelated.genre,
    establishedYear: franchiseAndRelated.establishedYear,
    artifacts: franchiseAndRelated.artifacts.map((artifact) => ({
      _id: artifact._id,
      name: artifact.name,
      description: artifact.description,
      type: artifact.type,
      powers: artifact.powers,
    })),
  };
  res.status(200).json({ data: response });
};

const updateFranchiseofScifiArtifact = async (req, res, next) => {
  const { id } = req.params;
  const { franchiseId } = req.body;
  const scifiArtifactsUpdated = await updateFranchiseofScifiArtifactInDB(id, {
    franchiseId,
  });
  res.status(200).json({ data: scifiArtifactsUpdated });
};

const updateScifiArtifactsInFranchise = async (req, res, next) => {
  const { id } = req.params;
  const { artifacts } = req.body;
  const franchiseUpdated = await updateScifiArtifactsInFranchiseinDB(id, {
    artifacts,
  });
  res.status(200).json({ data: franchiseUpdated });
};

module.exports = {
  getSciFiArtifactAndRelated,
  getFranchiseAndRelated,
  updateFranchiseofScifiArtifact,
  updateScifiArtifactsInFranchise,
};
