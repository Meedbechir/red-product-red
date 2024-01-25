import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import HotelListViewModel from './HotelListViewModel';

const HotelList = ({ onEditHotel }) => {
  const viewModel = HotelListViewModel();

  const handleUpdate = (hotelId) => {
    onEditHotel(hotelId);
    console.log("ID de l'hôtel à mettre à jour :", hotelId);
  };

  const handleDelete = (hotelId) => {
    // Show confirmation dialog
    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cet hôtel ?");
    
    if (confirmDelete) {
      viewModel.handleDelete(hotelId);
    }
  };

  return (
    <div className="mt-4">
      <div className="w-100 dflex">
        {viewModel.hotels.map((hotel) => (
          <div className="card mx-auto card-container" key={hotel._id}>
            <img
              className="card-img-top"
              src={`https://f-red-pr.onrender.com/images/${hotel.img}`}
              alt={hotel.title}
            />
            <div className="card-body">
              <p className="card-text">{hotel.address}</p>
              <h5 className="card-title">{hotel.title}</h5>
              <p className="card-text">{hotel.description}</p>
              <p className="card-text">Prix : {hotel.price} par nuit</p>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-info me-2"
                  onClick={() => handleUpdate(hotel._id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(hotel._id)}
                >
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
