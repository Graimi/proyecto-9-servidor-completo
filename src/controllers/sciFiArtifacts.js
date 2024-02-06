const {
  getAllSciFiArtifactsFromDB,
  getSciFiArtifactsByIdFromDB,
  createSciFiArtifactInDB,
  updateSciFiArtifactInDB,
  deleteSciFiArtifactInDB,
} = require('../repositories/sciFiArtifacts');

const getAllSciFiArtifacts = async (req, res, next) => {
  const { filter } = req.query;
  const sciFiArtifact = await getAllSciFiArtifactsFromDB(filter);
  res.status(200).json({ data: sciFiArtifact });
};

const getSciFiArtifactsById = async (req, res, next) => {
  const { id } = req.params;
  const sciFiArtifact = await getSciFiArtifactsByIdFromDB(id);
  res.status(200).json({ data: sciFiArtifact });
};

const createSciFiArtifacts = async (req, res, next) => {
  const newSciFiArtifact = await createSciFiArtifactInDB({ name: req.body.name });
  res.status(201).json({ data: newSciFiArtifact });
};

const updateSciFiArtifactById = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const sciFiArtifact = await updateSciFiArtifactInDB(id, { name });
  res.status(200).json({ data: sciFiArtifact });
};

const deleteSciFiArtifact = async (req, res, next) => {
  const { id } = req.params;
  await deleteSciFiArtifactInDB(id);
  res.status(200).json({ data: 'OK' });
};

module.exports = {
  getAllSciFiArtifacts,
  getSciFiArtifactsById,
  createSciFiArtifacts,
  updateSciFiArtifactById,
  deleteSciFiArtifact,
};
