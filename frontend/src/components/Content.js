import React, { useState } from "react";
import { Button, Modal, Row, Col, Form } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import HotelServices from '../services/hotelServices'; 
import HotelList from "./HotelList";

const Content = () => {
  const [showModal, setShowModal] = useState(false);
  const [editHotel, setEditHotel] = useState(null);
  const [hotelData, setHotelData] = useState({
    img: null,
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
    nightPrice: "",
    devise: ""
  });
  
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setHotelData({
      img:null,
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
        console.log("Created a new hotel");
      }
  
      handleClose();
    } catch (error) {
      console.error("Error creating/updating hotel:", error);
    }
  };
  
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setHotelData({ ...hotelData, img: file });
  };
    

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHotelData({ ...hotelData, [name]: value });
  };

  return (
    <>

    <div className="d-flex justify-content-end contenu">
      <Button variant="outline-dark" className="me-4 mt-4" onClick={handleShow}>
        <IoMdAdd className="me-2" />
        Créer un nouveau hôtel
      </Button>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Créer un nouveau hôtel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group controlId="formStep1">
                <Form.Label>Nom de l'hôtel</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez le nom de l'hôtel"
                  name="name"
                  value={hotelData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formStep2">
                <Form.Label>Adresse</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez l'adresse"
                  name="address"
                  value={hotelData.address}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formStep3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Entrez l'email"
                  name="email"
                  value={hotelData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formStep4">
                <Form.Label>Numéro</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez le numéro"
                  name="phoneNumber"
                  value={hotelData.phoneNumber}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formStep5">
                <Form.Label>Prix par nuit</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez le prix par nuit"
                  name="nightPrice"
                  value={hotelData.nightPrice}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formStep6">
                <Form.Label>Devise</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez la devise"
                  name="devise"
                  value={hotelData.devise}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  name="img"
                  onChange={handleFileChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleHotelCreate}>
            Enregistrer
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    <HotelList onEditHotel={handleEditHotel} />

    </>
  );
};

export default Content;
