import React, { useState } from 'react'
// import './style.css';
import Navbar from './Navbar'
import Footer from './Footer'
import './Contact.css'

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      formIsValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      formIsValid = false;
    }

    // Validate contact (assuming a basic 10-digit phone number)
    const contactRegex = /^\d{10}$/;
    if (!formData.contact.trim() || !contactRegex.test(formData.contact)) {
      newErrors.contact = 'Valid 10-digit contact number is required';
      formIsValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, submit or perform other actions
      alert('Form submitted:', formData);
    } else {
      // Form is not valid, do not submit
      alert('Form validation failed');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error message when the user starts typing again
    setErrors({ ...errors, [name]: '' });
  };

  return (
    <div className='root-c'>
      <div className='main-c'>
      <Navbar/>
      <div className='cent-l'>
      <h2 id='li-ro'>Get In Touch</h2>
      </div>
      </div>
      <iframe className='map-fd' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26988.623766851902!2d75.6518555!3d32.269435449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7f5d473c84b3%3A0x5335739bee705d89!2sPathankot%2C%20Punjab%20145001!5e0!3m2!1sen!2sin!4v1700388410276!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
      <div className='input-container'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <span className="error">{errors.name}</span>
      </div>

      <div className='input-container-e'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="error">{errors.email}</span>
      </div>

      <div className='input-container-c'>
        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <span className="error">{errors.contact}</span>
      </div>

      <div className='input-container'>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <span className="error">{errors.message}</span>
      </div>

      <button type="submit" onClick={validateForm}>Submit</button>
    </form>
      </div>
      <Footer/>
    </div>  
  )
}

export default Contact