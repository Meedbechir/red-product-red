// Importation des modules nécessaires
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const hotelRoutes = require('./routes/hotelRoute');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

// Définition du port d'écoute du serveur
const PORT = process.env.PORT || 5000;

// Configuration du stockage pour les fichiers téléchargés via multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'images')); // Dossier de destination des images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nommage du fichier téléchargé
  },
});

const upload = multer({ storage: storage }); // Utilisation de multer avec la configuration de stockage définie

// Activation de CORS et gestion des requêtes JSON
app.use(cors());
app.use(express.json());

// Déclaration du répertoire d'images comme statique pour être accessible publiquement
app.use('/images', express.static('images'));

// Utilisation de multer pour le téléchargement de fichiers (uniquement un fichier à la fois avec la clé 'img')
app.use(upload.single('img'));

// Utilisation des routes définies dans les fichiers authRoutes et hotelRoute
app.use('/api', authRoutes);
app.use('/api', hotelRoutes);

// Connexion à la base de données MongoDB via mongoose
mongoose.connect(process.env.DB_URL).then((result) => {
  console.log('Connexion à la base de données réussie !');
}).catch(err => {
  console.log(err);
});

// Démarrage du serveur sur le port spécifié
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
