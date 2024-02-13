const express = require('express');
const {
  getAllFranchises,
  getFranchisesById,
  createFranchises,
  updateFranchiseById,
  deleteFranchise,
} = require('../controllers/franchises');
const { isAuth } = require('../../middlewares/auth');

const franchisesRouter = express.Router();

franchisesRouter.get('/', getAllFranchises);
franchisesRouter.get('/:id', getFranchisesById);
franchisesRouter.post('/', [isAuth], createFranchises);
franchisesRouter.put('/:id', [isAuth], updateFranchiseById);
franchisesRouter.delete('/:id', [isAuth], deleteFranchise);

module.exports = franchisesRouter;
