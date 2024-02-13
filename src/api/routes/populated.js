const express = require('express');
const { isAuth } = require('../../middlewares/auth');
const upload = require('../../middlewares/file');
const {
  getSciFiArtifactAndRelated,
  getFranchiseAndRelated,
  updateFranchiseofScifiArtifact,
  updateScifiArtifactsInFranchise,
} = require('../controllers/populated');

const populatedRouter = express.Router();

populatedRouter.get('/scifiartifact/:id', getSciFiArtifactAndRelated);
populatedRouter.get('/franchise/:id', getFranchiseAndRelated);
populatedRouter.put('/scifiartifact/:id', [isAuth], upload.single("image"), updateFranchiseofScifiArtifact);
populatedRouter.put('/franchise/:id', [isAuth], updateScifiArtifactsInFranchise);

module.exports = populatedRouter;
