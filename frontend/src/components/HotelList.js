import React, { useState, useEffect } from "react";
import HotelServices from '../services/hotelServices';
import { FaEdit, FaTrash } from "react-icons/fa";

const HotelList = ({ onEditHotel }) => {
  // État local pour stocker la liste des hôtels
  const [hotels, setHotels] = useState([]);

  // Utilisation de useEffect pour charger les hôtels au rendu initial du composant
  useEffect(() => {
    fetchHotels();
  }, []);

  // Fonction asynchrone pour récupérer la liste des hôtels depuis le service
  const fetchHotels = async () => {
    try {
      const response = await HotelServices.getHotels();
      setHotels(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des hôtels :", error);
    }
  };

  // Gestionnaire de mise à jour d'un hôtel (passé en tant que prop)
  const handleUpdate = (hotelId) => {
    onEditHotel(hotelId);
    console.log("ID de l'hôtel à mettre à jour :", hotelId);
  };

  // Gestionnaire de suppression d'un hôtel
  const handleDelete = async (hotelId) => {
    try {
      await HotelServices.deleteHotel(hotelId);
      console.log("ID de l'hôtel supprimé :", hotelId);

      // Rafraîchir la liste des hôtels après suppression
      fetchHotels();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'hôtel :", error);
    }
  };

  // Rendu du composant
  return (
    <div className="mt-4">
      <div className="w-100 dflex">
        {hotels.map((hotel) => (
          <div className="card mx-auto card-container" key={hotel._id}>
            <img className="card-img-top" src={`http://localhost:5000/images/${hotel.img}`} alt={hotel.title} />
            <div className="card-body">
              <p className="card-text">{hotel.address}</p>
              <h5 className="card-title">{hotel.title}</h5>
              <p className="card-text">{hotel.description}</p>
              <p className="card-text">Prix : {hotel.price} par nuit</p>
              <div className="d-flex justify-content-end">
                <button className="btn btn-info me-2" onClick={() => handleUpdate(hotel._id)}>
                  <FaEdit />
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(hotel._id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
