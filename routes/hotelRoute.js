// Importation du module express pour créer des routes
const express = require('express');

// Importation du contrôleur défini pour les opérations liées aux hôtels
const HotelController = require('../controllers/hotelController');

// Création d'un objet Router à partir d'express
const router = express.Router();

// Route pour ajouter un nouvel hôtel via une requête POST
router.post('/hotels', HotelController.addHotel);

// Route pour récupérer la liste complète des hôtels via une requête GET
router.get('/hotels', HotelController.getHotels);

// Route pour récupérer les détails d'un hôtel spécifique via une requête GET avec l'ID de l'hôtel en paramètre
router.get('/hotels/:hotelId', HotelController.getHotelById);

// Route pour mettre à jour les informations d'un hôtel via une requête PUT avec l'ID de l'hôtel en paramètre
router.put('/hotels/:hotelId', HotelController.updateHotel);

// Route pour supprimer un hôtel spécifique via une requête DELETE avec l'ID de l'hôtel en paramètre
router.delete('/hotels/:hotelId', HotelController.deleteHotel);

// Exportation du module router pour utilisation dans d'autres parties de l'application
module.exports = router;
