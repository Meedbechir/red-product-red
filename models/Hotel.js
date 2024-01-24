const mongoose = require('mongoose');
const { Schema } = mongoose;

const hotelSchema = new Schema({
  img: String,
  title: String,
  description: String,
  price: Number,
  address: String,
  number: String,
  email: String,
  devise: String,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
