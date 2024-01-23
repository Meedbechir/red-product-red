import React, { useState } from "react";
import HotelServices from '../services/hotelServices'; 
import HotelList from "./HotelList";
import { IoMdAdd } from "react-icons/io";

const Content = () => {
  // State pour gérer l'affichage du modal
  const [showModal, setShowModal] = useState(false);
  
  // State pour stocker les données de l'hôtel en cours d'édition ou de création
  const [hotelData, setHotelData] = useState({
    img: null,
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
    nightPrice: "",
    devise: ""
  });
  
  // State pour stocker l'ID de l'hôtel en cours d'édition
  const [editHotel, setEditHotel] = useState(null);
  
  // Fonction pour afficher le modal
  const handleShow = () => setShowModal(true);
  
  // Fonction pour fermer le modal et réinitialiser les données
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

  // Fonction pour récupérer les détails d'un hôtel et les afficher dans le modal en cas de modification
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
  
  // Fonction pour créer ou mettre à jour un hôtel
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
        console.log("Created a new hotel");
      }
  
      handleClose();
    } catch (error) {
      console.error("Error creating/updating hotel:", error);
    }
  };
  
  // Fonction pour gérer le changement de fichier
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file.name);
    setHotelData({ ...hotelData, img: file });
  };
    
  // Fonction pour gérer le changement d'input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHotelData({ ...hotelData, [name]: value });
  };

  return (
    <>
      {/* Bouton pour ouvrir le modal */}
      <div className="d-flex justify-content-end contenu">
        <button className="btn btn-outline-dark me-4 mt-4" onClick={handleShow}>
          <IoMdAdd className="me-2" />
          Créer un nouveau hôtel
        </button>

        {/* Modal pour la création ou modification d'un hôtel */}
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              {/* Contenu du modal */}
              <div className="modal-header">
                <h5 className="modal-title">Créer un nouveau hôtel</h5>
                <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* Formulaire pour les détails de l'hôtel */}
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
                {/* Boutons de sauvegarde et de fermeture du modal */}
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
      
      {/* Liste des hôtels */}
      <HotelList onEditHotel={handleEditHotel} />
    </>
  );
};

export default Content;
