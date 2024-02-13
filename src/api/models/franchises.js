const mongoose = require('mongoose');

const franchiseSchema = new mongoose.Schema(
  {
    name: String,
    genre: String,
    establishedYear: Number,
    image: String,
    artifacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SciFiArtifact' }],
  },
  { collection: 'franchises' }
);

const Franchise = mongoose.model('Franchise', franchiseSchema);

module.exports = { Franchise };
