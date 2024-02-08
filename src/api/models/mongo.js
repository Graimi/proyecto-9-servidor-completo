const mongoose = require('mongoose');

const sciFiArtifactSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String,
    powers: String,
    franchiseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Franchise' },
  });
  
  const franchiseSchema = new mongoose.Schema({
    name: String,
    genre: String,
    establishedYear: String,
    artifacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SciFiArtifact' }],
  });

  // crear modelo users
  
  const SciFiArtifact = mongoose.model('SciFiArtifact', sciFiArtifactSchema);
  const Franchise = mongoose.model('Franchise', franchiseSchema);

module.exports = { SciFiArtifact, Franchise };