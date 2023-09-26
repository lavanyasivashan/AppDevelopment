import React, { useState } from 'react';
import './Register.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import './Register.css';
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = () => {
    setErrors({
      name: '',
      email: '',
      phone: '',
    });

    let hasErrors = false;

    if (!formData.name) {
      setErrors({ ...errors, name: 'Name is required.' });
      hasErrors = true;
    }

    else if (!formData.email) {
      setErrors({ ...errors, email: 'Email is required.' });
      hasErrors = true;
    } else if (!isValidEmail(formData.email)) {
      setErrors({ ...errors, email: 'Invalid email format.' });
      hasErrors = true;
    }

    else if (!formData.phone) {
      setErrors({ ...errors, phone: 'Phone number is required.' });
      hasErrors = true;
    } else if (!isValidPhone(formData.phone)) {
      setErrors({ ...errors, phone: 'Invalid phone number format.' });
      hasErrors = true;
    }

    if (!hasErrors) {
      console.log('Name:', formData.name);
      console.log('Email Address:', formData.email);
      console.log('Phone Number:', formData.phone);

      // Navigate to '/NavBar' when all fields are filled and no errors
      navigate('/loginbtn');
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isValidPhone = (phone) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  };

  return (
    <div className='backg1'>
      <div className="container">
        <h2>SIGN UP</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>
          <button type="button" className="submit-button" onClick={handleRegister}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;