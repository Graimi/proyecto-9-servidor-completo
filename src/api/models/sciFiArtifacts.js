const mongoose = require('mongoose');

const sciFiArtifactSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    type: String,
    powers: String,
    franchiseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Franchise' },
  },
  { collection: 'scifiartifacts' }
);

const SciFiArtifact = mongoose.model('SciFiArtifact', sciFiArtifactSchema);

module.exports = { SciFiArtifact };
