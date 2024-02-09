const {
  getAllSciFiArtifactsFromDB,
  getSciFiArtifactsByIdFromDB,
  createSciFiArtifactInDB,
  updateSciFiArtifactInDB,
  deleteSciFiArtifactInDB,
} = require('../../repositories/sciFiArtifacts');

const getAllSciFiArtifacts = async (req, res, next) => {
  const { filter } = req.query;
  const sciFiArtifact = await getAllSciFiArtifactsFromDB(filter);
  res.status(200).json({ data: sciFiArtifact });
};

const getSciFiArtifactsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sciFiArtifact = await getSciFiArtifactsByIdFromDB(id);
    res.status(200).json({ data: sciFiArtifact });
  } catch (error) {
    return next(setError(400, 'Not able to get scifi artifact 🙃'));
  }
};

const createSciFiArtifacts = async (req, res, next) => {
  try {
    const newSciFiArtifact = await createSciFiArtifactInDB({
      name: req.body.name,
    });
    res.status(201).json({ data: newSciFiArtifact });
  } catch (error) {
    return next(setError(400, 'Not able to create scifi artifact 🙃'));
  }
};

const updateSciFiArtifactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const sciFiArtifact = await updateSciFiArtifactInDB(id, { name });
    res.status(200).json({ data: sciFiArtifact });
  } catch (error) {
    return next(setError(400, 'Not able to update scifi artifact 🙃'));
  }
};

const deleteSciFiArtifact = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteSciFiArtifactInDB(id);
    res.status(200).json({ data: 'OK' });
  } catch (error) {
    return next(setError(400, 'Not able to delete scifi artifact 🙃'));
  }
};

module.exports = {
  getAllSciFiArtifacts,
  getSciFiArtifactsById,
  createSciFiArtifacts,
  updateSciFiArtifactById,
  deleteSciFiArtifact,
};
