const Hotel = require('../models/Hotel');

const HotelController = {
  addHotel: async (req, res) => {
    try {
      const { title, description, price, address, number, email, devise } = req.body;

      if (!title || !price || !address) {
        return res.status(400).json({ message: 'Les champs titre, prix et adresse sont obligatoires' });
      }


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

      const savedHotel = await newHotel.save();

      res.status(201).json(savedHotel);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  },

  getHotels: async (req, res) => {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  },

  getHotelById: async (req, res) => {
    try {
      const hotelId = req.params.hotelId;
      const hotel = await Hotel.findById(hotelId);

      if (!hotel) {
        return res.status(404).json({ message: 'Hôtel non trouvé' });
      }

      res.status(200).json(hotel);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  },

  updateHotel: async (req, res) => {
    try {
      const hotelId = req.params.hotelId;
      const updateData = req.body;

      const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, updateData, { new: true });

      if (!updatedHotel) {
        return res.status(404).json({ message: 'Hôtel non trouvé' });
      }

      res.status(200).json(updatedHotel);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  },

  deleteHotel: async (req, res) => {
    try {
      const hotelId = req.params.hotelId;

      await Hotel.findByIdAndDelete(hotelId);

      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  },
};

module.exports = HotelController;
