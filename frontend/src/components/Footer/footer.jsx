import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#DD9F9F' }} className="py-5 mt-20">
      <div className="container mx-auto text-white ">
        {/* Logo */}
        <div className="text-center mt-3">
          <Link to="/">
            <h2 className="font-extrabold m-4 ">BeautyBook</h2>
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center mb-6 gap-4">
          {/* Social Media Links */}
          <a href="https://www.facebook.com/people/Beautybook-Pakistan/61553852996885/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaFacebook size={30} />
          </a>
          {/* WhatsApp Link */}
          <a href="https://wa.me/+923330367784" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://www.instagram.com/beautybookpakistan?igsh=MTJxdmhxZndnbms5MQ==" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com/company/beauty-book-pakistan/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
        {/* Page Links */}
        <div className=" grid grid-cols-2 sm:grid-cols-6 text-center gap-1 sm:gap-4 m-4 place-items-center"> 
          <Link to="/aboutus" className="mb-2 md:mb-0 text-sm sm:text-base whitespace-nowrap">About Us</Link>
          <Link to="/faq" className="mb-2 md:mb-0 text-sm sm:text-base whitespace-nowrap">FAQS</Link>
          <Link to="/contactus" className="mb-2 md:mb-0 text-sm sm:text-base whitespace-nowrap">Contact</Link>
          <Link to="/termservices" className="mb-2 md:mb-0 text-sm sm:text-base whitespace-nowrap">Terms of Services</Link>
          <Link to="/privacypolicy" className="mb-2 md:mb-0 text-sm sm:text-base whitespace-nowrap">Privacy Policy</Link>
          <Link to='/teams' className="mb-2 md:mb-0 text-sm sm:text-base whitespace-nowrap">Teams</Link>
        </div>

        <div>
          <p className="flex justify-center text-center mt-3 whitespace-nowrap">© 2024 BeautyBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
