// Content.js
import React from "react";
import HotelList from "./HotelList";
import HotelModal from "./HotelModal";
import { IoMdAdd } from "react-icons/io";
import ContentViewModel from "./ContentViewModel";

const Content = () => {
  const viewModel = ContentViewModel();

  return (
    <>
      <div className="d-flex justify-content-end contenu">
        <button className="btn btn-outline-dark me-4 mt-4" onClick={viewModel.handleShow}>
          <IoMdAdd className="me-2" />
          Créer un nouveau hôtel
        </button>

        <HotelModal
          showModal={viewModel.showModal}
          handleClose={viewModel.handleClose}
          hotelData={viewModel.hotelData}
          handleInputChange={viewModel.handleInputChange}
          handleFileChange={viewModel.handleFileChange}
          handleHotelCreate={viewModel.handleHotelCreate}
        />
      </div>

      <HotelList onEditHotel={viewModel.handleEditHotel} />
    </>
  );
};

export default Content;
