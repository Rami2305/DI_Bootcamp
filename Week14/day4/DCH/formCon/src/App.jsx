

import './App.css'
import React, { useState } from 'react';
import FormComponent from './FormData';

function App() {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    dietaryRestrictions: {
      nutsFree: false,
      lactoseFree: false,
      vegan: false,
    }
  });

  
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        dietaryRestrictions: {
          ...prevFormData.dietaryRestrictions,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(formData);
  };

  return (
    <div>
      <FormComponent formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;