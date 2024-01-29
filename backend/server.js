const express = require('express');
const APP = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const hotelRoutes = require('./routes/hotelRoute');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

APP.use(cors());
APP.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'images'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });



APP.use('/images', express.static(path.join(__dirname, 'backend', 'images')));
APP.use(upload.single('img'));

const serverStartTime = new Date();
console.log(`Le serveur a démarré le ${serverStartTime}`);


APP.use('/api', authRoutes);
APP.use('/api', hotelRoutes);

mongoose.connect(process.env.DB_URL).then((result) => {
  console.log('Connexion à la base de données réussie !');
}).catch(err => {
  console.log(err);
});

APP.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
