import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthContext.jsx';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../../config.js';
import HashLoader from 'react-spinners/HashLoader';
import Logo from '../../assets/images/logo-removebg.png';
import { HiOutlineMail, HiOutlineEye, HiOutlineEyeOff, HiOutlineKey } from 'react-icons/hi';


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",

  })
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext)
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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
    <div className='container mt-5 mb-10  rounded-lg w-full lg:w-[1000px] lg:h-[400px] md:w-[800px] sm:w-[200px] h-auto md:h-[350px] sm:h-[300px] flex-shrink-0 text-center py-10 bg-signUpBgColor'
      style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)' }}>

      {/* rigt side section */}
      <div className='w-full md:w-1/2  h-full md:float-right flex flex-col justify-center'>
        <img src={Logo} alt="logo" className="" />
      </div>


      {/* Right side with default background color */}
      <div className="w-full md:w-1/2 h-full bg-white">
        {/* Content for the right side */}
        <div className="mx-4 md:mx-12 ">
          <h2 className=" text-3xl  md:text-3xl font-extrabold mt-8 mb-4">WELCOME BACK</h2>
          <div>
            <h2 className='text-2xl md:text-xl'>Login to your account</h2>
          </div>
          {/* Form for signin */}
          <form action="" className="flex flex-col space-y-2 mt-4" onSubmit={handleSubmit}>


            <div className="relative ">
              <input type="email" name='email' required className="border w-full sm:w-[300px] lg:w-[350px] block rounded-md p-2 pl-10 focus:outline-none focus:border-btnColor" placeholder="Email" value={formData.email} onChange={hanldeInputChange} />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineMail className="h-5 w-5 text-gray-400" />
              </div>
            </div>


            <div className="relative ">
              <input type={showPassword ? 'text' : 'password'} name='password' required className="border block rounded-md p-2 pl-10 focus:outline-none w-full sm:w-[350px] lg:w-[350px] focus:border-btnColor" placeholder="Password" value={formData.password} onChange={hanldeInputChange} />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineKey className="h-5 w-5 text-gray-400" />
              </div>
              <div className="absolute inset-y-0 right-0 pr-20 flex items-center">
                {showPassword ? (
                  <HiOutlineEyeOff
                    className="h-5 w-5 text-gray-400 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <HiOutlineEye
                    className="h-5 w-5 text-gray-400 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>
            <div className='flex justify-center gap-10 p-2'>
              <div>
                <label htmlFor="rememberMe" className="flex items-center whitespace-nowrap">
                  <input type="checkbox" id="rememberMe" className="mr-2 " />
                  Remember Me
                </label>
              </div>
              <div>
                <Link className='whitespace-nowrap'>Forget Password?</Link>
              </div>
            </div>
            <button type='submit' className="bg-btnColor text-white py-2 rounded-full font-bold">

              {loading ? <HashLoader size={35} color='#ffffff' /> : 'Login'}
            </button>

            <span className=''>Don’t have an account? <span className='underline'><Link to='/userRegister'>Sign up</Link></span> </span>

          </form>
        </div>
      </div>

    </div>
  );
}

export default Login;
