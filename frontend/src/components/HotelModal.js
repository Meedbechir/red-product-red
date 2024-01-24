import React from "react";

const HotelModal = ({
  showModal,
  handleClose,
  hotelData,
  handleInputChange,
  handleFileChange,
  handleHotelCreate,
}) => {
  return (
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
  );
};

export default HotelModal;
