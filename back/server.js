const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Etudiant = require('./Etudiant');

// Connexion à MongoDB
mongoose.connect('mongodb://localhost/ecole', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware pour parser le JSON
app.use(express.json());

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

// Route pour récupérer tous les étudiants
app.get('/etudiants', async (req, res) => {
    try {
      const etudiants = await Etudiant.find();
      console.log("etudiants",etudiants);
      res.json(etudiants);
    } catch (error) {
      console.log("errrrrrrrrr");
      res.status(500).json({ message: error.message });
    }
  });