const express = require('express');
const {
  getSciFiArtifactAndRelated,
  getFranchiseAndRelated,
  updateFranchiseofScifiArtifact,
  updateScifiArtifactsInFranchise,
} = require('../controllers/populated');
const { isAuth } = require('../../middlewares/auth');

const populatedRouter = express.Router();

populatedRouter.get('/scifiartifact/:id', getSciFiArtifactAndRelated);
populatedRouter.get('/franchise/:id', getFranchiseAndRelated);
populatedRouter.put('/scifiartifact/:id', [isAuth], updateFranchiseofScifiArtifact);
populatedRouter.put('/franchise/:id', [isAuth], updateScifiArtifactsInFranchise);

module.exports = populatedRouter;
