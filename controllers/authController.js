// Importation du modèle User pour interagir avec la base de données
const User = require('../models/User');

// Importation du module jwt pour la gestion des tokens JWT
const jwt = require('jsonwebtoken');

// Importation des variables d'environnement depuis le fichier .env
require('dotenv').config();

// Récupération de la clé secrète JWT à partir des variables d'environnement
const secretKey = process.env.JWT_SECRET;

// Fonction asynchrone pour l'inscription d'un nouvel utilisateur
async function registerUser(req, res){
    let { name, email, password} = req.body;
    try{
        // Vérification de l'existence d'un utilisateur avec la même adresse e-mail
        const duplicate = await User.find({email});
        if(duplicate && duplicate.length > 0) {
            return res.status(400).send({message:'Utilisateur déjà enregistré avec cette adresse e-mail'});
         }

         // Création d'une nouvelle instance de l'utilisateur avec les données fournies
         let user = new User({name, email, password});

         // Enregistrement de l'utilisateur dans la base de données
         const result = await user.save();
         console.log(result);

         // Réponse indiquant que l'utilisateur a été enregistré avec succès
         res.status(201).send({message: 'Utilisateur enregistré avec succès !'});
    }catch(err){
        console.log(err);

        // Réponse en cas d'erreur lors de l'inscription
        res.status(400).send(err);
    }
}

// Fonction asynchrone pour l'authentification d'un utilisateur
// Fonction asynchrone pour l'authentification d'un utilisateur
async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        // Recherche de l'utilisateur dans la base de données en fonction de l'adresse e-mail
        const user = await User.findOne({ email });

        // Vérification de l'existence de l'utilisateur
        if (!user) {
            return res.status(404).send({ message: "Échec de l'authentification !" });
        }

        // Vérification de la validité du mot de passe fourni
        const isPasswordValid = await user.comparePassword(password);

        // En cas de mot de passe incorrect
        if (!isPasswordValid) {
            return res.status(404).send({ message: "Mot de passe incorrect !" });
        }

        // Génération d'un token JWT avec l'ID de l'utilisateur comme payload
        let token = jwt.sign({ userId: user?._id }, secretKey, { expiresIn: '1m' });

        // Ajoutez ces logs pour inspecter le token et voir s'il contient bien une date d'expiration
        console.log("Generated Token:", token);
        console.log("Decoded Token:", jwt.decode(token, { complete: true }));

        // Données finales à renvoyer en réponse
        let finalData = {
            userId: user?._id,
            email: user?.email,
            name: user?.name,
            token
        }

        // Envoi des données finales en réponse
        res.send(finalData);
    } catch (err) {
        console.log(err);

        // Réponse en cas d'erreur lors de l'authentification
        res.status(400).send(err);
    }
}

// Contrôleur d'authentification regroupant les fonctions associées
const AuthController = {
    registerUser,
    loginUser
}

// Exportation du contrôleur pour utilisation dans d'autres parties de l'application
module.exports = AuthController;
