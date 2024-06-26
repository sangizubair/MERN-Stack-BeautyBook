// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import Contactus from '../ContactUs/contactus';
// import Privacypolicy from '../PrivacyPolicy/privacypolicy';
// import TermServices from '../TermsService/termservices';
// import Faq from '../Faqs/faq';
// import Teams from '../Team/teams';
// import Logo from '../../assets/images/logo-removebg.png';
// import BookChar from '../../assets/images/bookingChar.png';
// import BookChar1 from '../../assets/images/trendingChar.png';

// const AboutUs = () => {

//   return (
//     <div className="flex flex-col lg:flex-row ">
      
//        {/* Main Content */}
//       <div className="w-full lg:w-3/4 flex flex-col items-center justify-center">
//         <AboutUsContent />
//       </div>
//     </div>
//   );
// };

// const AboutUsContent = () => (
//   <>
//     <section className="container justify-center items-center">
//       <div className="flex flex-col items-center">
//         <div className="lg:flex justify-center items-center">
//           {/* Image */}
//           <div className="flex justify-center mt-5 lg:mt-0 mb-5 lg:mr-5 lg:order-last">
//             <img
//               src={Logo}
//               style={{ width: '300px', height: '300px' }}
//               className="w-40 h-40 lg:w-48 lg:h-48"
//               alt=""
//             />
//           </div>
//           {/* Text Content */}
//           <div className="lg:w-[400px] text-center lg:text-left lg:order-first">
//             <div className="text-headingColor font-extrabold text-lg">BEAUTYBOOK</div>
//             <p className="text-justify py-5">
//               BeautyBook is a free beauty scheduling app and makes appointments easy to find and
//               book within seconds. No more phone tag. Book anytime, from anywhere, 24/7.
//             </p>
//             <p className="text-justify">
//               BeautyBook is a gateway to a revolutionized beauty experience. We're changing the
//               game, making beauty bookings convenient, transparent, and accessible.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>

//     <section className="container justify-center items-center">
//       <div className="flex flex-col items-center">
//         <div className="lg:flex justify-center items-center">
//           <div className="flex justify-center mt-8 lg:mt-0 mb-5 lg:mr-5">
//             <img
//               src={BookChar}
//               style={{ width: '300px', height: '300px' }}
//               className="w-40 h-40 lg:w-48 lg:h-48"
//               alt=""
//             />
//           </div>
//           <div className="lg:w-[400px] text-center lg:text-left">
//             <div className="text-headingColor font-extrabold text-lg">BOOK ANYTIME, ANYWHERE</div>
//             <p className="text-justify py-5">
//               With our BeautyBook app, scheduling beauty appointments becomes effortless. Whether you're at home, on the go, or traveling, you can easily find and book appointments within seconds. No more waiting on hold or struggling to coordinate schedules. With BeautyBook, you have the power to book anytime, anywhere, 24/7.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>


//     <section className="container justify-center items-center">
//       <div className="flex flex-col items-center">
//         <div className="lg:flex justify-center items-center gap-5">
//           <div className="flex justify-center mt-5 lg:mt-0 lg:order-last">
//             <img
//               src={BookChar1}
//               style={{ width: '300px', height: '300px' }}
//               className="w-40 h-40 lg:w-48 lg:h-48"
//               alt=""
//             />
//           </div>

//           <div className="lg:w-[400px] text-center lg:text-left lg:order-first">
//             <div className="text-headingColor font-extrabold text-lg">FIND TRENDY SERVICES</div>
//             <p className="text-justify py-5">
//               Explore our BeautyBook app to find the trendiest beauty services available. Whether it's the newest hairstyles, cutting-edge makeup techniques, or innovative skincare treatments, BeautyBook showcases the latest trends in the beauty industry. With just a few taps, you can discover and book trendy services that keep you ahead of the curve.
//             </p>

//           </div>


//         </div>
//       </div>
//     </section>

//   </>

// );

// export default AboutUs;

import React from 'react';
import { Link } from 'react-router-dom';
import Contactus from '../ContactUs/contactus';
import Privacypolicy from '../PrivacyPolicy/privacypolicy';
import TermServices from '../TermsService/termservices';
import Faq from '../Faqs/faq';
import Teams from '../Team/teams';
import Logo from '../../assets/images/logo-removebg.png';
import BookChar from '../../assets/images/bookingChar.png';
import BookChar1 from '../../assets/images/trendingChar.png';

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      {/* Main Content */}
      <div className="w-full lg:w-3/4 flex flex-col items-center justify-center">
        <AboutUsContent />
      </div>
    </div>
  );
};

const AboutUsContent = () => (
  <>
    <section className="container justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="lg:flex justify-center items-center ">
          {/* Image */}
          <div className="flex justify-center mt-5 lg:mt-0 mb-5 lg:mr-5 lg:order-last">
            <img
              src={Logo}
              style={{ width: '300px', height: '300px' }}
              className="w-40 h-40 lg:w-48 lg:h-48"
              alt=""
            />
          </div>
          {/* Text Content */}
          <div className="lg:w-[400px] text-center lg:text-left lg:order-first">
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
          <div className="flex justify-center mt-8 lg:mt-0 mb-5 lg:mr-5">
            <img
              src={BookChar}
              style={{ width: '300px', height: '300px' }}
              className="w-40 h-40 lg:w-48 lg:h-48"
              alt=""
            />
          </div>
          <div className="lg:w-[400px] text-center lg:text-left">
            <div className="text-headingColor font-extrabold text-lg">BOOK ANYTIME, ANYWHERE</div>
            <p className="text-justify py-5">
              With our BeautyBook app, scheduling beauty appointments becomes effortless. Whether you're at home, on the go, or traveling, you can easily find and book appointments within seconds. No more waiting on hold or struggling to coordinate schedules. With BeautyBook, you have the power to book anytime, anywhere, 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>


    <section className="container justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="lg:flex justify-center items-center gap-5">
          <div className="flex justify-center mt-5 lg:mt-0 lg:order-last">
            <img
              src={BookChar1}
              style={{ width: '300px', height: '300px' }}
              className="w-40 h-40 lg:w-48 lg:h-48"
              alt=""
            />
          </div>

          <div className="lg:w-[400px] text-center lg:text-left lg:order-first">
            <div className="text-headingColor font-extrabold text-lg">FIND TRENDY SERVICES</div>
            <p className="text-justify py-5">
              Explore our BeautyBook app to find the trendiest beauty services available. Whether it's the newest hairstyles, cutting-edge makeup techniques, or innovative skincare treatments, BeautyBook showcases the latest trends in the beauty industry. With just a few taps, you can discover and book trendy services that keep you ahead of the curve.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutUs;
