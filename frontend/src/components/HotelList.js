import React, { useState, useEffect } from "react";
import HotelServices from '../services/hotelServices';
import { FaEdit, FaTrash } from "react-icons/fa";

const HotelList = ({ onEditHotel }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await HotelServices.getHotels();
      setHotels(response.data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  const handleUpdate = (hotelId) => {
    onEditHotel(hotelId);
    console.log("Update hotel ID:", hotelId);
  };

  const handleDelete = async (hotelId) => {
    try {
      await HotelServices.deleteHotel(hotelId);
      console.log("Deleted hotel ID:", hotelId);

      fetchHotels();
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  };

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
              <p className="card-text">Prix: {hotel.price} par nuit</p>
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
