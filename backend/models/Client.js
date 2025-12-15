const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['PRIVE', 'PUBLIC', 'DIPLOMATIQUE'] },
  responsable: String,
  email: String,
  phone: String,
  address: String,
  zone: String,
  status: { type: String, default: 'ACTIF' },
  effectifTotal: Number,
  effectifDeploye: Number,
  comments: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Client', ClientSchema);