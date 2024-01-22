// Importation du module express pour créer des routes
const express = require('express');

// Importation du contrôleur défini pour les opérations liées à l'authentification
const AuthController = require('../controllers/authController');

// Création d'un objet Router à partir d'express
const router = express.Router();

// Route pour l'inscription d'un nouvel utilisateur via une requête POST
router.post('/register', AuthController.registerUser);

// Route pour la connexion d'un utilisateur existant via une requête POST
router.post('/login', AuthController.loginUser);

// Exportation du module router pour utilisation dans d'autres parties de l'application
module.exports = router;
