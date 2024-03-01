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


        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={Founder} alt="" />
          </a>
          <div className="p-5">

            <p className="mb-3 font-extrabold text-center text-lg text-black">Shafique Ahmed</p>
          </div>
          <div className='text-center m-2'><p>Founder</p></div>
        </div>


        {/* Card 2 */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={CoFounder} alt="" />
          </a>
          <div className="p-5">

            <p className="mb-3 font-extrabold text-center text-lg text-black">Amna Somroo</p>
          </div>
          <div className='text-center m-2'><p>Co-founder</p></div>
        </div>

        {/* Card 3 */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={MernStack} alt="" />
          </a>
          <div className="p-5">

            <p className="mb-3 font-extrabold text-center text-lg text-black">M.Usama Qureshi</p>
          </div>
          <div className='text-center m-2'><p>MERN stack developer</p></div>
        </div>

      </div>
    </div>
  );
};

export default Teams;
