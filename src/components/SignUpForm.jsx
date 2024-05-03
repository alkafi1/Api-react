import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/react";
import { BarLoader } from "react-spinners";
import AuthHeader from './AuthHeader';
import InputField from '../components/InputField';
import PasswordInput from '../components/PassowrdInput';
import SubmitButton from '../components/SubmitButton';
import LoadingSpinner from '../components/LoadingSpinner';
import SocialLoginButtons from '../components/SocialLoginButtons';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  width: 600px;
`;

const SignUpForm = ({ logo }) => {
  const [formData, setFormData] = useState({
    username: '',
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
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        name: formData.username,
        email: formData.email,
        password: formData.password
      });
      toast.success(response.data.message); // show success toast
      setLoading(false);
      setFormData({
        username: '',
        email: '',
        password: ''
      });
      navigate('/login');
    } catch (error) {
      console.log("Error:", error); // Log the error object to the console
      if (error.response && error.response.status === 422) {
        // Handle validation errors returned by the API
        const errors = error.response.data.errors;
        const validationErrors = {};
        for (const key in errors) {
          toast.error(errors[key][0]);
        }
        console.log("Validation Errors:", validationErrors); // Log validation errors to the console
      } else {
        toast.error("An error occurred while registering the user");
      }
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-700 to-blue-500 h-screen overflow-hidden">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-96">
          <AuthHeader logo={logo} title="Sign Up"></AuthHeader>
          {loading && <BarLoader css={override} color={"#36D7B7"} loading={loading} />}
          <form onSubmit={handleSubmit}>

            <InputField label="Username" type="text" name="username" placeholder="Enter your username" onChange={handleChange} />
            <InputField label="Email" type="email" name="email" placeholder="Enter your email" onChange={handleChange} />

            <PasswordInput label="Password" name="password" value={formData.password} onChange={handleChange} />
            <SocialLoginButtons></SocialLoginButtons>
            <SubmitButton label="Sign Up" />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpForm;
