import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">Note Taking App</Link>
        <div>
          <Link to="/login" className="text-white mr-4">Login</Link>
          <Link to="/signup" className="text-white mr-4">Signup</Link>
          <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;