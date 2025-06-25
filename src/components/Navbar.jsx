import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      width: '100%',
      padding: '10px 20px',
      backgroundColor: '#6200ea',
      color: '#fff',
      display: 'flex',
      gap: '15px',
      boxSizing: 'border-box'
    }}>
      <Link to="/" style={{ color: '#fff' }}>Home</Link>
      <Link to="/register" style={{ color: '#fff' }}>Register</Link>
      <Link to="/myevents" style={{ color: '#fff' }}>My Events</Link>
    </nav>
  );
}

export default Navbar;
