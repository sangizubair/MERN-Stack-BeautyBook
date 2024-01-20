import React from "react";
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram , FaLinkedin } from 'react-icons/fa';
import Logo from '../../assets/images/logo-removebg.png';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'white' }} className="py-3">
          <hr className="" style={{ borderColor: 'pink' }} />
      <div className="container mx-auto text-btnColor">

                {/* Logo */}
                <div className="text-center mt-3 flex">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-32" />
          </Link>
        </div>
        <div className="flex items-center justify-center mb-6">
          {/* Social Media Links */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaFacebook size={30}/>
          </a> 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaInstagram  size={30}/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>

        {/* Page Links */}
        <div className="flex justify-center space-x-6">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms of Services</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
