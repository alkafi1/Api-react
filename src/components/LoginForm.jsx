// LoginForm.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputField from '../components/InputField';
import PasswordInput from '../components/PassowrdInput';
import SubmitButton from '../components/SubmitButton';
import LoadingSpinner from '../components/LoadingSpinner';
import SocialLoginButtons from '../components/SocialLoginButtons';
import AuthHeader from '../components/AuthHeader';


const LoginPage = ({ logo }) => {
  const location = useLocation();
  const successMessage = location.state?.successMessage;

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [successMessage]);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: formData.email,
        password: formData.password
      });
      toast.success(response.data.message);
      setLoading(false);
      navigate('/login');
    } catch (error) {
      console.log("Error:", error);
      if (error.response && error.response.status === 401) {
        toast.error("Invalid email or password");
      } else {
        toast.error("An error occurred while logging in");
      }
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-700 to-blue-500 h-screen overflow-hidden">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-96 relative">
          <AuthHeader logo={logo} title="Login"></AuthHeader>
          {loading && <LoadingSpinner />}
          <form onSubmit={handleSubmit}>
            <InputField label="Email" type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
            <PasswordInput label="Password" name="password" onChange={handleChange} />
            <SocialLoginButtons></SocialLoginButtons>
            <SubmitButton label="Login" />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
