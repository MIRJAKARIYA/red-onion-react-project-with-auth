import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../images/logo2.png';
import { FiShoppingCart } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  return (
    <header className="d-flex justify-content-between header-extra-style mt-3">
        <div>
            <img src={Logo} width={120} alt="" />
        </div>
      <div className="me-5 link-container">
        <Link className="me-4" to="/cart"><FiShoppingCart></FiShoppingCart></Link>
        <Link className="me-4" to="/home">Home</Link>
        <Link className="me-4" to="/login">Login</Link>
        <Link className="me-4 signup-extra-style bg-danger rounded-pill text-white" to="/register">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
