import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return <div className='header'>
    <Link to="/"><i className="fas fa-home"></i></Link>
  </div>;
};

export default Navbar;
