// Importation du module axios pour effectuer des requêtes HTTP
import axios from 'axios';

// URL de base du serveur
const SERVER_URL = 'http://localhost:5000/api';

// Fonction pour enregistrer un nouvel utilisateur
const registerUser = (data) => {
    return axios.post(SERVER_URL + '/register', data);
}

// Fonction pour connecter un utilisateur existant
const loginUser = (data) => {
    return axios.post(SERVER_URL + '/login', data);
}

// Objet regroupant les fonctions liées à l'authentification
const AuthServices = {
    registerUser,
    loginUser
}

// Exportation de l'objet AuthServices pour être utilisé dans d'autres parties du code
export default AuthServices;
