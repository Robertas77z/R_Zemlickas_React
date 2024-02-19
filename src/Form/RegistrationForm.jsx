import React, { useState } from 'react';
import axios from 'axios';
import "../Form/Form-style.css"

export const RegistrationForm = () => {
  
  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    price: '',
    cover: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books', formData)
      .then(() => {
        window.location.href = '/book'; 
      })
      .catch(error => console.error('Error:', error));
  };
  

  return (
    <form className='Form-style'
    onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange} required />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="text" name="price" value={formData.price} onChange={handleChange} required />
      </div>
      <div>
        <label>Cover:</label>
        <input type="text" name="cover" value={formData.cover} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

