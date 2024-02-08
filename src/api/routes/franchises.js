const express = require('express');
const {
  getAllFranchises,
  getFranchisesById,
  createFranchises,
  updateFranchiseById,
  deleteFranchise,
} = require('../controllers/franchises');

const franchisesRouter = express.Router();

franchisesRouter.get('/', getAllFranchises);
franchisesRouter.get('/:id', getFranchisesById);
franchisesRouter.post('/', createFranchises);
franchisesRouter.put('/:id', updateFranchiseById);
franchisesRouter.delete('/:id', deleteFranchise);

module.exports = franchisesRouter;
