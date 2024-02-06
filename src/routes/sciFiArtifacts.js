const express = require('express');
const {
  getAllSciFiArtifacts,
  getSciFiArtifactsById,
  createSciFiArtifacts,
  updateSciFiArtifactById,
  deleteSciFiArtifact,
} = require('../controllers/sciFiArtifacts');

const sciFiArtifactsRouter = express.Router();

sciFiArtifactsRouter.get('/', getAllSciFiArtifacts);
sciFiArtifactsRouter.get('/:id', getSciFiArtifactsById);
sciFiArtifactsRouter.post('/', createSciFiArtifacts);
sciFiArtifactsRouter.put('/:id', updateSciFiArtifactById);
sciFiArtifactsRouter.delete('/:id', deleteSciFiArtifact);

module.exports = sciFiArtifactsRouter;
