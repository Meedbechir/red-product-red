// HotelListViewModel.js
import { useState, useEffect } from 'react';
import HotelServices from '../services/hotelServices';

const HotelListViewModel = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await HotelServices.getHotels();
      setHotels(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des hôtels :", error);
    }
  };

  const handleDelete = async (hotelId) => {
    try {
      await HotelServices.deleteHotel(hotelId);
      console.log("ID de l'hôtel supprimé :", hotelId);
      fetchHotels();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'hôtel :", error);
    }
  };

  return {
    hotels,
    handleDelete,
  };
};

export default HotelListViewModel;
