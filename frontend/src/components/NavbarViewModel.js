import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../utils/GetUser';

const NavbarViewModel = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  
  useEffect(() => {
    const userDetails = getUserDetails();
    setUser(userDetails);
    
    if (!userDetails) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('todoAppUser');
    navigate('/');
  };

  return {
    user,
    handleLogout,
  };
};

export default NavbarViewModel;
