// Importation du module mongoose
const mongoose = require('mongoose');

// Extraction de la classe Schema depuis mongoose
const { Schema } = mongoose;

// Définition du schéma pour le modèle Hotel
const hotelSchema = new Schema({
  // Chemin de l'image de l'hôtel
  img: String,
  
  // Titre de l'hôtel
  title: String,
  
  // Description de l'hôtel
  description: String,
  
  // Prix de l'hôtel
  price: Number,
  
  // Adresse de l'hôtel
  address: String,
  
  // Numéro de téléphone de l'hôtel
  number: String,
  
  // Adresse email de l'hôtel
  email: String,
  
  // Devise utilisée pour les prix de l'hôtel
  devise: String,
});

// Création du modèle Hotel à partir du schéma
const Hotel = mongoose.model('Hotel', hotelSchema);

// Exportation du modèle pour une utilisation externe
module.exports = Hotel;
