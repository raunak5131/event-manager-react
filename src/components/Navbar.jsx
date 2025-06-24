import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#6200ea', color: '#fff' }}>
      <Link to="/" style={{ margin: '0 10px', color: '#fff' }}>Home</Link>
      <Link to="/register" style={{ margin: '0 10px', color: '#fff' }}>Register</Link>
      <Link to="/myevents" style={{ margin: '0 10px', color: '#fff' }}>My Events</Link>
    </nav>
  );
}

export default Navbar;
