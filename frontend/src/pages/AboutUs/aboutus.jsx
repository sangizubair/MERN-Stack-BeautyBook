import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Contactus from '../ContactUs/contactus';
import Privacypolicy from '../PrivacyPolicy/privacypolicy';
import TermServices from '../TermsService/termservices';
import Faq from '../Faqs/faq';
import Teams from '../Team/teams';
import Logo from '../../assets/images/logo-removebg.png';
import BookChar from '../../assets/images/bookChar.png';
import BookChar1 from '../../assets/images/bookchar1.png';

const AboutUs = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 min-h-screen flex flex-col justify-between py-8 px-8 border-r border-gray-300">
        <div className="flex flex-col space-y-2">
          <SidebarTab
            label="About Us"
            tab="/aboutus"
            activeTab={activeTab}
            onClick={handleTabClick}
          />
          <SidebarTab
            label="Privacy Policy"
            tab="/privacypolicy"
            activeTab={activeTab}
            onClick={handleTabClick}
          />
          <SidebarTab
            label="Contact Us"
            tab="/contactus"
            activeTab={activeTab}
            onClick={handleTabClick}
          />
          <SidebarTab
            label="FAQs"
            tab="/faq"
            activeTab={activeTab}
            onClick={handleTabClick}
          />
          <SidebarTab
            label="Terms of Services"
            tab="/termservices"
            activeTab={activeTab}
            onClick={handleTabClick}
          />
           <SidebarTab
            label="Our Team"
            tab="/teams"
            activeTab={activeTab}
            onClick={handleTabClick}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 flex flex-col items-center justify-center">
        {renderTabContent(activeTab)}
      </div>
    </div>
  );
};

const SidebarTab = ({ label, tab, activeTab, onClick }) => (
  <button
    className={`text-gray-600 hover:text-btnColor font-bold py-2 px-4 text-left focus:outline-none ${
      activeTab === tab ? 'text-blue-600' : ''
    } border-b border-gray-300`}
    onClick={() => onClick(tab)}
  >
    {label}
  </button>
);

const renderTabContent = (activeTab) => {
  switch (activeTab) {
    case '/aboutus':
      return <AboutUsContent />;
    case '/privacypolicy':
      return <Privacypolicy />;
    case '/contactus':
      return <Contactus />;
    case '/faq':
      return <Faq />;
    case '/termservices':
      return <TermServices />;  
    case '/teams':
      return <Teams />;
    default:
      return null;
  }
};

const AboutUsContent = () => (
  <>
  <section className="container justify-center items-center">
    <div className="flex flex-col items-center">
      <div className="lg:flex justify-center items-center">
        <div className="lg:w-[400px] text-center lg:text-left">
          <div className="text-headingColor font-extrabold text-lg">BEAUTYBOOK</div>
          <p className="text-justify py-5">
            BeautyBook is a free beauty scheduling app and makes appointments easy to find and
            book within seconds. No more phone tag. Book anytime, from anywhere, 24/7.
          </p>
          <p className="text-justify">
            BeautyBook is a gateway to a revolutionized beauty experience. We're changing the
            game, making beauty bookings convenient, transparent, and accessible.
          </p>
        </div>
        <div className="flex justify-center mt-5 lg:mt-0">
          <img
            src={Logo}
            style={{ width: '300px', height: '300px' }}
            className="w-40 h-40 lg:w-48 lg:h-48"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <section className="container justify-center items-center">
    <div className="flex flex-col items-center">
      <div className="lg:flex justify-center items-center">
            
        <div className="flex justify-center mt-8 lg:mt-0">
          <img
            src={BookChar}
            style={{ width: '300px', height: '300px' }}
            className="w-40 h-40 lg:w-48 lg:h-48"
            alt=""
          />
        </div>
        <div className="lg:w-[400px] text-center lg:text-left">
          <div className="text-headingColor font-extrabold text-lg">BEAUTYBOOK</div>
          <p className="text-justify py-5">
            BeautyBook is a free beauty scheduling app and makes appointments easy to find and
            book within seconds. No more phone tag. Book anytime, from anywhere, 24/7.
          </p>
          <p className="text-justify">
            BeautyBook is a gateway to a revolutionized beauty experience. We're changing the
            game, making beauty bookings convenient, transparent, and accessible.
          </p>
        </div>
      
      </div>
    </div>
  </section>
   
  <section className="container justify-center items-center">
    <div className="flex flex-col items-center">
      <div className="lg:flex justify-center items-center">
        <div className="lg:w-[400px] text-center lg:text-left">
          <div className="text-headingColor font-extrabold text-lg">BEAUTYBOOK</div>
          <p className="text-justify py-5">
            BeautyBook is a free beauty scheduling app and makes appointments easy to find and
            book within seconds. No more phone tag. Book anytime, from anywhere, 24/7.
          </p>
          <p className="text-justify">
            BeautyBook is a gateway to a revolutionized beauty experience. We're changing the
            game, making beauty bookings convenient, transparent, and accessible.
          </p>
        </div>
        <div className="flex justify-center mt-5 lg:mt-0">
          <img
            src={BookChar1}
            style={{ width: '300px', height: '300px' }}
            className="w-40 h-40 lg:w-48 lg:h-48"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  </>
  
);

export default AboutUs;
