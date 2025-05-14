import React, { useState } from 'react';
//import { auth } from '../firebase'; 
//import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
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
    }

    return errors;
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        console.log('Login successful');
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
      } catch (error) {
        console.error(error);
        setErrors({ email: "Invalid login credentials." });
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Log in to your account</h2>

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
          placeholder="Enter your password.."
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <button type="submit" className="loginbtn">Login</button>
        {isSubmitted && <p className="success-message">Login successful!</p>}
      </form>
    </div>
  );
}
