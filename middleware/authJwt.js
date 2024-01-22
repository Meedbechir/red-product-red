// Importation du module jsonwebtoken pour la gestion des tokens JWT
const jwt = require('jsonwebtoken');

// Importation du module dotenv pour la configuration des variables d'environnement
require('dotenv').config();

// Récupération de la clé secrète JWT à partir des variables d'environnement
const secretKey = process.env.JWT_SECRET;

// Middleware pour l'authentification par token
const authenticateToken = async (req, res, next) => {
    // Récupération du jeton d'authentification depuis l'en-tête de la requête
    const authHeader = req.headers.authorization;

    // Vérification de la présence du jeton
    if (!authHeader) return res.status(401).send({ message: `Echec de l'authentification` });

    // Extraction du jeton à partir de l'en-tête
    const token = authHeader.split(' ')[1];

    // Vérification et décryptage du jeton
    jwt.verify(token, secretKey, (err, decoded) => {
        // Gestion des erreurs de vérification du jeton
        if (err) {
            return res.status(403).send({ message: "Token not valid, Please Login Again" });
        }

        // Affichage des informations décryptées du jeton
        console.log("Decoded Token:", decoded);

        // Ajout des informations utilisateur décryptées à la requête
        req.user = decoded;

        // Appel de la fonction next pour passer au middleware suivant
        next();
    });
}

// Exportation du middleware pour l'utiliser dans d'autres parties du code
module.exports = authenticateToken;
