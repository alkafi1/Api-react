// CategoyIndex.js
import React, { useState, useEffect } from 'react';
import Layout from '../../Layouts/DashboardLayout/DashboardLayout';
import { useAuth } from '../../Contexts/AuthContext';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const CategoyIndex = () => {
  const { user , token} = useAuth();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return; // Do nothing if user is not authenticated

    const fetchData = async () => {
      console.log(token)
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/category', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCategories(response.data); // Assuming the response data is an array of categories
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, [user]);
console.log(categories);
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Category</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <h1>ihibhikbvfdfd</h1>
      )}
    </Layout>
  );
};

export default CategoyIndex;
