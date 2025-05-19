import React, { useState } from 'react';
import { auth } from '../Services/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function Register() {
  const [formData, setFormData] = useState({ fname: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fname.trim()) {
      newErrors.fname = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await updateProfile(userCredential.user, {
        displayName: formData.fname,
      });

      setFormData({ fname: '', email: '', password: '' });
      setSuccessMessage('Registration successful!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Firebase registration error:', error);
      setErrors({ general: error.message });
    }
  };

  return (
    <div className="register-container">
      <h1 className="title">Create a New Account</h1>

      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="fname">Name <span className="required-star">*</span></label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        {errors.fname && <p className="error-message">{errors.fname}</p>}

        <label htmlFor="email">Email <span className="required-star">*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label htmlFor="password">Password <span className="required-star">*</span></label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create a password"
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        {errors.general && <p className="error-message">{errors.general}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit" className="registerbtn">Register</button>
      </form>
    </div>
  );
}
