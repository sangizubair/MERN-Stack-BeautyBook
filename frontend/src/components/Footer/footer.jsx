import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram , FaLinkedin , FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#DD9F9F' }} className="py-3">
      <div className="container mx-auto text-white ">
        {/* Logo */}
        <div className="text-center mt-3">
          <Link to="/">
            <h2 className="font-extrabold">BeautyBook</h2>
          </Link>
        </div>
        <div className="flex items-center justify-center mb-6">
          {/* Social Media Links */}
          <a href="https://www.facebook.com/people/Beautybook-Pakistan/61553852996885/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaFacebook size={30}/>
          </a> 
           {/* WhatsApp Link */}
           <a href="https://wa.me/+923330367784" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://www.instagram.com/beautybookpakistan?igsh=MTJxdmhxZndnbms5MQ==" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaInstagram  size={30}/>
          </a>
          <a href="https://www.linkedin.com/company/beauty-book-pakistan/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>

        {/* Page Links */}
        <div className="flex flex-wrap justify-center space-x-4">
          <Link to="/aboutus" className="mb-2 md:mb-0">About Us</Link>
          <Link to="/contactus" className="mb-2 md:mb-0">Contact</Link>
          <Link to="/termservices" className="mb-2 md:mb-0">Terms of Services</Link>
          <Link to="/privacypolicy" className="mb-2 md:mb-0">Privacy Policy</Link>
        </div>
        <div>
          <p className="text-center mt-1">© 2024 BeautyBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
