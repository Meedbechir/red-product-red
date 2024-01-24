import React, { useState } from "react";
import HotelServices from '../services/hotelServices'; 
import HotelList from "./HotelList";
import { IoMdAdd } from "react-icons/io";

const Content = () => {
  const [showModal, setShowModal] = useState(false);
  const [hotelData, setHotelData] = useState({
    img: null,
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
    nightPrice: "",
    devise: ""
  });
  const [editHotel, setEditHotel] = useState(null);

  const handleShow = () => setShowModal(true);

  const handleClose = () => {
    setShowModal(false);
    setHotelData({
      img: null,
      name: "",
      address: "",
      email: "",
      phoneNumber: "",
      nightPrice: "",
      devise: ""
    });
  };

 
  const handleEditHotel = async (hotelId) => {
    setShowModal(true);
    setEditHotel(hotelId);
  
    try {
      const response = await HotelServices.getHotelById(hotelId);
      const hotelDetails = response.data;
  
      setHotelData({
        img: null,
        name: hotelDetails.title,
        address: hotelDetails.address,
        email: hotelDetails.email,
        phoneNumber: hotelDetails.number,
        nightPrice: hotelDetails.price,
        devise: hotelDetails.devise,
      });
    } catch (error) {
      console.error("Error fetching hotel details:", error);
    }
  };
  
const handleHotelCreate = async () => {
  try {
    const formData = new FormData();
    formData.append('title', hotelData.name);
    formData.append('address', hotelData.address);
    formData.append('email', hotelData.email);
    formData.append('number', hotelData.phoneNumber);
    formData.append('price', hotelData.nightPrice);
    formData.append('devise', hotelData.devise);

    if (hotelData.img) {
      formData.append('img', hotelData.img);
    }

    if (editHotel) {
      await HotelServices.updateHotel(editHotel, formData);
      console.log("Updated hotel ID:", editHotel);
    } else {
      await HotelServices.addHotel(formData);
    }

    // Mettre à jour les hôtels après la création ou la mise à jour
    console.log("Created or updated hotel");

    handleClose();
  } catch (error) {
    console.error("Error creating/updating hotel:", error);
  }
};

  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file.name);
    setHotelData({ ...hotelData, img: file });
  };
    
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHotelData({ ...hotelData, [name]: value });
  };

  return (
    <>
      <div className="d-flex justify-content-end contenu">
        <button className="btn btn-outline-dark me-4 mt-4" onClick={handleShow}>
          <IoMdAdd className="me-2" />
          Créer un nouveau hôtel
        </button>

        <div className="modal" tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Créer un nouveau hôtel</h5>
                <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col">
                    <div className="form-group" controlId="formStep1">
                      <label>Nom de l'hôtel</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={hotelData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group" controlId="formStep2">
                      <label>Adresse</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={hotelData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group" controlId="formStep3">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={hotelData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group" controlId="formStep4">
                      <label>Numéro</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        value={hotelData.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group" controlId="formStep5">
                      <label>Prix par nuit</label>
                      <input
                        type="text"
                        className="form-control"
                        name="nightPrice"
                        value={hotelData.nightPrice}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group" controlId="formStep6">
                      <label>Devise</label>
                      <input
                        type="text"
                        className="form-control"
                        name="devise"
                        value={hotelData.devise}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group" controlId="formImage">
                      <label>Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        className="form-control"
                        name="img"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleHotelCreate}>
                  Enregistrer
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <HotelList onEditHotel={handleEditHotel} />
    </>
  );
};

export default Content;
