import React, { useState } from 'react';
import HotelListViewModel from './HotelListViewModel';
// import { FaEdit, FaTrash } from 'react-icons/fa';

const HotelList = ({ onEditHotel }) => {
  const viewModel = HotelListViewModel();
  const [imageError, setImageError] = useState(false);

  //  const handleUpdate = (hotelId) => {
  //   onEditHotel(hotelId);
  //   console.log("ID de l'hôtel à mettre à jour :", hotelId);
  // };

  // const handleDelete = (hotelId) => {
  //   // Show confirmation dialog
  //   const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cet hôtel ?");
    
  //   if (confirmDelete) {
  //     viewModel.handleDelete(hotelId);
  //   }
  // };

  const defaultImage = "https://www.hotel-madrague.com/images/09.jpg";

  return (
    <div className="mt-4">
      <div className="w-100 dflex">
        {viewModel.hotels.map((hotel) => (
          <div className="card mx-auto card-container" key={hotel._id}>
            <img
              className="card-img-top"
              src={imageError ? defaultImage : hotel.img}
              alt={hotel.title}
              onError={() => setImageError(true)}
            />

            <div className="card-body">
              <p className="card-text add">{hotel.address}</p>
              <h5 className="card-title title-card">{hotel.title}</h5>
              <p className="card-text">{hotel.description}</p>
              <p className="card-text">{hotel.price} XOF par nuit</p>
              {/* <div className="d-flex justify-content-end">
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
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
