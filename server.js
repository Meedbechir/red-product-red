const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const hotelRoutes = require('./routes/hotelRoute'); 
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'images')); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());

app.use('/images', express.static('images'));

app.use(upload.single('img'));

app.use('/api', authRoutes);
app.use('/api', hotelRoutes);

mongoose.connect(process.env.DB_URL).then((result) => {
  console.log('DB Connected Successfully!');
}).catch(err => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
