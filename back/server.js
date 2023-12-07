const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Etudiant = require('./Etudiant');

// Connexion à MongoDB
// mongoose.connect('mongodb://localhost/ecole', { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

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
      console.log("erreur");
      res.status(500).json({ message: error.message });
    }
  });

// Pour ajouter un étudiant
app.post('/etudiants', async (req, res) => {
  console.log(req)
  try {
    console.log('Requête POST reçue pour ajouter un étudiant', req.body);
    const nouvelEtudiant = new Etudiant({
      nom: req.body.nom,
      prenom: req.body.prenom,
      classe: req.body.classe
    });
      console.log("nouvel etudiant :",nouvelEtudiant);
      const etudiantEnregistre = await nouvelEtudiant.save();
      res.status(201).json(etudiantEnregistre);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});