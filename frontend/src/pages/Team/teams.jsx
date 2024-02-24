import React from 'react';
import Founder from '../../assets/images/founder.jpg';
import CoFounder from '../../assets/images/cofounder.jpg';
import MernStack from '../../assets/images/usama.jpg';
import { FaLinkedin } from 'react-icons/fa'; // Import the LinkedIn icon

const Teams = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img src={Founder} alt="Team Member 1" className="w-full h-[310px] sm:h-auto md:h-auto object-cover" />
          <div className="p-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">Shafique Ahmed</h2>
              <p className="text-gray-700">Founder</p>
            </div>
            <a href="https://www.linkedin.com/in/shafique-ahmed" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img src={CoFounder} alt="Team Member 2" className="w-full h-[310px] sm:h-auto md:h-auto object-cover" />
          <div className="p-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">Amna Soomro</h2>
              <p className="text-gray-700">Co-founder</p>
            </div>
            <a href="https://www.linkedin.com/in/amna-soomro" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img src={MernStack} alt="Team Member 3" className="w-full h-[310px] sm:h-auto md:h-auto object-cover" />
          <div className="p-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">M. Usama Qureshi</h2>
              <p className="text-gray-700">MERN stack developer</p>
            </div>
            <a href="https://www.linkedin.com/in/usama-qureshi" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
