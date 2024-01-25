import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthServices from '../services/authServices';
import { getErrorMessage } from '../utils/GetErrors';

const LoginViewModel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
      };

      setLoading(true);

      const response = await AuthServices.loginUser(data);
      console.log("Response from Auth Service:", response.data);

      localStorage.setItem('todoAppUser', JSON.stringify(response.data));

      // alert('Connexion Réussie');
      navigate('/content');

      setLoading(false);
    } catch (err) {
      console.log(err);
      alert(getErrorMessage(err));

     alert(err.message || 'Une erreur s\'est produite');

      // alert(error);

      setLoading(false);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleSubmit,
  };
};

export default LoginViewModel;
