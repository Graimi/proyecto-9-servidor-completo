const express = require('express');
const {
  getAllSciFiArtifacts,
  getSciFiArtifactsById,
  createSciFiArtifacts,
  updateSciFiArtifactById,
  deleteSciFiArtifact,
} = require('../controllers/sciFiArtifacts');
const { isAuth } = require('../../middlewares/auth');

const sciFiArtifactsRouter = express.Router();

sciFiArtifactsRouter.get('/', getAllSciFiArtifacts);
sciFiArtifactsRouter.get('/:id', getSciFiArtifactsById);
sciFiArtifactsRouter.post('/', [isAuth], createSciFiArtifacts);
sciFiArtifactsRouter.put('/:id', [isAuth], updateSciFiArtifactById);
sciFiArtifactsRouter.delete('/:id', [isAuth], deleteSciFiArtifact);

module.exports = sciFiArtifactsRouter;
