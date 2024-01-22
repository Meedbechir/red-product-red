import axios from 'axios';

// URL du serveur où se trouve l'API
const SERVER_URL = 'http://localhost:5000/api';

// Ajoute un nouvel hôtel
const addHotel = (data) => {
  return axios.post(`${SERVER_URL}/hotels`, data);
};

// Récupère la liste des hôtels
const getHotels = () => {
  return axios.get(`${SERVER_URL}/hotels`);
};

// Récupère un hôtel par son ID
const getHotelById = (hotelId) => {
  return axios.get(`${SERVER_URL}/hotels/${hotelId}`);
};

// Met à jour les informations d'un hôtel
const updateHotel = (hotelId, data) => {
  return axios.put(`${SERVER_URL}/hotels/${hotelId}`, data);
};

// Supprime un hôtel par son ID
const deleteHotel = (hotelId) => {
  return axios.delete(`${SERVER_URL}/hotels/${hotelId}`);
};

// Objet contenant les méthodes des services liées aux hôtels
const HotelServices = {
  addHotel,
  getHotels,
  getHotelById,
  updateHotel,
  deleteHotel
};

export default HotelServices;
