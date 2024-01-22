const Hotel = require('../models/Hotel');

const HotelController = {

  // Ajoute un nouvel hôtel
  addHotel: async (req, res) => {
    try {
      const { title, description, price, address, number, email, devise } = req.body;

      // Vérifie que les champs requis sont présents
      if (!title || !price || !address) {
        return res.status(400).json({ message: 'Les champs titre, prix et adresse sont obligatoires' });
      }

      // Récupère le nom du fichier d'image, s'il existe
      const img = req.file ? req.file.filename : null;

      // Crée une nouvelle instance d'hôtel
      const newHotel = new Hotel({
        img,
        title,
        description,
        price,
        address,
        number,
        email,
        devise,
      });

      // Enregistre l'hôtel dans la base de données
      const savedHotel = await newHotel.save();

      res.status(201).json(savedHotel);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  },

  // Récupère la liste des hôtels
  getHotels: async (req, res) => {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  },

  // Récupère un hôtel par son ID
  getHotelById: async (req, res) => {
    try {
      const hotelId = req.params.hotelId;

      // Recherche l'hôtel par son ID
      const hotel = await Hotel.findById(hotelId);

      // Vérifie si l'hôtel existe
      if (!hotel) {
        return res.status(404).json({ message: 'Hôtel non trouvé' });
      }

      res.status(200).json(hotel);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  },

  // Met à jour les informations d'un hôtel
  updateHotel: async (req, res) => {
    try {
      const hotelId = req.params.hotelId;
      const updateData = req.body;

      // Met à jour l'hôtel et renvoie la version mise à jour
      const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, updateData, { new: true });

      // Vérifie si l'hôtel existe
      if (!updatedHotel) {
        return res.status(404).json({ message: 'Hôtel non trouvé' });
      }

      res.status(200).json(updatedHotel);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  },

  // Supprime un hôtel par son ID
  deleteHotel: async (req, res) => {
    try {
      const hotelId = req.params.hotelId;

      // Supprime l'hôtel par son ID
      await Hotel.findByIdAndDelete(hotelId);

      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  },
};

module.exports = HotelController;
