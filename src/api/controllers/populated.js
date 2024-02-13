const { setError } = require('../../config/error');
const {
  getSciFiArtifactAndRelatedFromDB,
  getFranchiseAndRelatedFromDB,
  updateFranchiseofScifiArtifactInDB,
  updateScifiArtifactsInFranchiseinDB,
} = require('../../repositories/populated');

const getSciFiArtifactAndRelated = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sciFiArtifactAndRelated = await getSciFiArtifactAndRelatedFromDB(id);
    res.status(200).json({ data: sciFiArtifactAndRelated });
  } catch (error) {
    return next(setError(400, 'Not able to make the operation 🙃'));
  }
};

const getFranchiseAndRelated = async (req, res, next) => {
  try {
    const { id } = req.params;
    const franchiseAndRelated = await getFranchiseAndRelatedFromDB(id);
    res.status(200).json({ data: franchiseAndRelated });
  } catch (error) {
    return next(setError(400, 'Not able to make the operation 🙃'));
  }
};

const updateFranchiseofScifiArtifact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const franchisedUpdated = await updateFranchiseofScifiArtifactInDB(
      id,
      req.body,
      req.file
    );
    return res.status(200).json(franchisedUpdated);
  } catch (error) {
    return next(setError(400, 'Not able to make the operation 🙃'));
  }
};

const updateScifiArtifactsInFranchise = async (req, res, next) => {
  try {
    const { id } = req.params;
    const franchiseUpdated = await updateScifiArtifactsInFranchiseinDB(
      id,
      req.body
    );
    res.status(200).json({ data: franchiseUpdated });
  } catch (error) {
    return next(setError(400, 'Not able to make the operation 🙃'));
  }
};

module.exports = {
  getSciFiArtifactAndRelated,
  getFranchiseAndRelated,
  updateFranchiseofScifiArtifact,
  updateScifiArtifactsInFranchise,
};
