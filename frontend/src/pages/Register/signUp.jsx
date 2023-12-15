import React from 'react';
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div className='container mt-14 rounded-lg w-full md:w-[879px] h-auto md:h-[500px] flex-shrink-0 text-center py-12 bg-signUpBgColor'
      style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)' }}>
      
      {/* Left side with pink color */}
      <div className="w-full md:w-1/2 h-full bg-btnColor md:float-right">
        <div className="mx-4 md:mx-12">
          <h1 className="text-white text-2xl md:text-4xl font-bold mt-8 mb-4">Hello, Friend!</h1>
          <p className="text-white text-sm md:text-base mb-8">Enter your personal details and start your journey with us</p>
          <button className="bg-white text-btnColor px-4 py-2 rounded-full font-bold text-sm md:text-base">
            
          <Link to={'/signup/user'}>
              
            Sign Up
            
              </Link>

            </button>
        </div>
          <span className='text-white'>dont have an account?</span>
      </div>

      {/* Right side with default background color */}
      <div className="w-full md:w-1/2 h-full bg-white">
        {/* Content for the right side */}
        <div className="mx-4 md:mx-12 ">
          <h2 className="text-btnColor text-2xl md:text-3xl font-bold mt-8 mb-4">Sign in to BeautyBook</h2>
          {/* Form for signin */}
          <form action="" className="flex flex-col space-y-2 mt-4">
           
            <input type="email" className="border rounded-md p-2 focus:outline-none focus:border-btnColor" placeholder="Email" />

           
            <input type="password" className="border rounded-md p-2 focus:outline-none focus:border-btnColor" placeholder="Password" />
            
            <button className="bg-btnColor text-white py-2 rounded-full font-bold">
              Login
              
              </button>
            <span className='text-btnColor'>Already have anaccount?</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
