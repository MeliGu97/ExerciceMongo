const mongoose = require('mongoose');

const etudiantSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  classe: String
});

module.exports = mongoose.model('Etudiant', etudiantSchema);