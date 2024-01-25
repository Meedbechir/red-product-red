import { useState } from 'react';
import AuthServices from "../services/authServices";
import { useNavigate } from 'react-router-dom';

const RegisterViewModel = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const data = {
        name,
        email,
        password,
      };

      const response = await AuthServices.registerUser(data);
      console.log(response.data);

      setLoading(false);

    //   alert("Inscription réussie !");

      navigate("/");
    } catch (err) {
      console.log(err.response.data);

    //   alert("Une erreur s'est produite lors de l'inscription.");

      setLoading(false);
    }
  };
  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleSubmit,
  };
};

export default RegisterViewModel;
