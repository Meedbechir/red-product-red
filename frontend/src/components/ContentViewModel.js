import { useState } from "react";
import HotelServices from '../services/hotelServices';
const ContentViewModel = () => {
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
      } else {
        await HotelServices.addHotel(formData);
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
  return {
    showModal,
    hotelData,
    editHotel,
    handleShow,
    handleClose,
    handleEditHotel,
    handleHotelCreate,
    handleFileChange,
    handleInputChange,
  };
};

export default ContentViewModel;
