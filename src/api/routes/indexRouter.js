const express = require('express');
const sciFiArtifactsRouter = require('./sciFiArtifacts');
const franchisesRouter = require('./franchises');
const populatedRouter = require('./populated');
const usersRouter = require('./users');

const router = express.Router();

router.use('/scifiartifacts', sciFiArtifactsRouter);
router.use('/franchises', franchisesRouter);
router.use('/populated', populatedRouter);
router.use('/users', usersRouter);

module.exports = router;
