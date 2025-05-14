// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/staff">Dashboard</Link></li>
        <li><Link to="/create">Create Event</Link></li>
      </ul>
    </nav>
  );
}
