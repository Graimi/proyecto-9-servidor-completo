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

const franchiseSchema = new mongoose.Schema(
  {
    name: String,
    genre: String,
    establishedYear: String,
    artifacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SciFiArtifact' }],
  },
  { collection: 'franchises' }
);

const userSchema = new mongoose.Schema(
  {
    name: String,
    genre: String,
    age: String,
  },
  { collection: 'users' }
);

const SciFiArtifact = mongoose.model('SciFiArtifact', sciFiArtifactSchema);
const Franchise = mongoose.model('Franchise', franchiseSchema);
const User = mongoose.model('User', userSchema);

module.exports = { SciFiArtifact, Franchise, User };
