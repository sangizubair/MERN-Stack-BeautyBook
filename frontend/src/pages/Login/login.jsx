import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthContext.jsx';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../../config.js';
import HashLoader from 'react-spinners/HashLoader';
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",

  })
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext)

  const hanldeInputChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  // loading state 

  // submitHandler function here
  const handleSubmit = async (event) => {
   
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, { // fetch api
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const result = await res.json() // result from api
      if (!res.ok) {
        throw new Error(result.message)
      }

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        }
      });



      console.log(result, 'login data');

      setLoading(false);
      // taost message
      toast.success(result.message)
      navigate('/')  // navigate to home page 

    } catch (error) {
      toast.error(error.message);
      setLoading(false);

    }
    // Log the form data

    // agar submit pr click kre to post method chle or user register hojye 
  };


  return (
    <div className='container mt-5 mb-10  rounded-lg w-full lg:w-[1000px] lg:h-[400px] md:w-[800px] sm:w-[200px] h-auto md:h-[350px] sm:h-[200px] flex-shrink-0 text-center py-10 bg-signUpBgColor'
      style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)' }}>

{/* Left side with pink color */}
<div className="w-full md:w-1/2 h-full bg-btnColor md:float-right flex flex-col justify-center">
  <div className="mx-4 md:mx-12 flex flex-col items-center">
    <h1 className="text-white text-2xl md:text-4xl font-bold mt-8 mb-4">Hello, Friend!</h1>
    <p className="text-white text-sm md:text-base  mb-6">Enter your personal details and start your journey with us</p>
    <button className="bg-white text-btnColor px-4 py-2 rounded-full font-bold text-sm md:text-base">
      <Link to={'/userRegister'}>Sign Up</Link>
    </button>
  </div>
  <span className='text-white text-center mt-4'>Don't have an account?</span>
</div>


      {/* Right side with default background color */}
      <div className="w-full md:w-1/2 h-full bg-white">
        {/* Content for the right side */}
        <div className="mx-4 md:mx-12 ">
          <h2 className="text-btnColor text-2xl md:text-3xl font-bold mt-8 mb-4">Sign in to BeautyBook</h2>
          {/* Form for signin */}
          <form action="" className="flex flex-col space-y-2 mt-4" onSubmit={handleSubmit}>

            <input type="email" name='email' required className="border rounded-md p-2 focus:outline-none focus:border-btnColor" placeholder="Email" value={formData.email} onChange={hanldeInputChange} />

            <input type="password" name='password' required className="border rounded-md p-2 focus:outline-none focus:border-btnColor" placeholder="Password" value={formData.password} onChange={hanldeInputChange} />

            <button type='submit' className="bg-btnColor text-white py-2 rounded-full font-bold">
              {loading ? <HashLoader size={35} color='#ffffff' /> : 'Login'}
            </button>
            <span className='text-btnColor'>Already have anaccount?</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
