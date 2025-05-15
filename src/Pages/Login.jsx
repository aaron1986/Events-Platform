import React, { useState } from 'react';
import { auth } from '../Services/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function Register() {
  const [formData, setFormData] = useState({ fname: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.fname.trim()) {
      errors.fname = 'Name is required.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address.';
    }

    if (!formData.password) {
      errors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    return errors;
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        await updateProfile(userCredential.user, {
          displayName: formData.fname,
        });

        console.log('Registration successful');
        setIsSubmitted(true);
        setFormData({ fname: '', email: '', password: '' });

        setTimeout(() => setIsSubmitted(false), 3000);
      } catch (error) {
        console.error(error);
        setErrors({ email: error.message });
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Create a New Account</h2>

        <label htmlFor="fname">
          <span>Name <span className="required-star">*</span></span>
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={handleInputChange}
          placeholder="Enter your name.."
        />
        {errors.fname && <p className="error-message">{errors.fname}</p>}

        <label htmlFor="email">
          <span>Email <span className="required-star">*</span></span>
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email.."
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label htmlFor="password">
          <span>Password <span className="required-star">*</span></span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Create a password.."
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <button type="submit" className="registerbtn">Register</button>
        {isSubmitted && <p className="success-message">Registration successful!</p>}
      </form>
    </div>
  );
}
