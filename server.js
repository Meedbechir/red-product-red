const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./backend/routes/authRoutes');
const hotelRoutes = require('./backend/routes/hotelRoute');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'images'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });



app.use('/images', express.static('images'));
app.use(upload.single('img'));

const serverStartTime = new Date();
console.log(`Le serveur a démarré le ${serverStartTime}`);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) => 
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
}else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  })
}

app.use('/api', authRoutes);
app.use('/api', hotelRoutes);

mongoose.connect(process.env.DB_URL).then((result) => {
  console.log('Connexion à la base de données réussie !');
}).catch(err => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
