
// export default SalonRegister;
import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { toast }  from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader'
import { BASE_URL } from '../../../config.js';

const SalonRegister = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    ownerName: '',
    salonName: '',
    email: '',
    password: '',
    gender: '',
    role: 'salon',
    phone: '',
    easyPaisa: '', // salon account numbers as easypaisa
    jazzCash: '', // salon account numbers as jazzcash
    cnicNo: '',
    photo: '', // 
    serviceImage: '', // add service images
    coverImage: '', // add cover images multiple images 
    experience: '',
    bio: '',
    location: '', // city or town name
    address: '', // street address or salon address
    services: [
      {
        name: '',
        serviceDescription:'',
        price: 0,
        serviceImage : '', // added service images!
        timeSlots: [{startTime: '',  }],

      },
    ],

    workingHours: [
      {
        day: '',
        dayOnOff : false,
        startTime: '',
        endTime: '',
      },
    ],

  });

  const navigate= useNavigate();

  const hanldeInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  

  const handleSubmit =  async (event) => {
    // TODO: Add logic to send data to the database
     event.preventDefault();
   
   // setLoading(true);

    try {
         // logic to send data to the database
         const res=  await fetch(`${BASE_URL}/auth/salonregister`,{
          method:'post',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(formData)
    })
    const {message}= await res.json();
    if (!res.ok) {
      throw new Error(message);
    }
    setLoading(false);
    toast.success(message);
    navigate('/salonLogin'); // to navigate salon login page

    } catch (error) {
        toast.error(error.message);
        setLoading(false);
    }
    // Reset the form after submission if needed
   resetForm();
  };

  const resetForm = () => {
    setFormData({
    ownerName: '',
    salonName: '',
    email: '',
    password: '',
    gender: '',
    role: 'salon',
    phone: '',
    easyPaisa: '', // salon account numbers as easypaisa
    jazzCash: '', // salon account numbers as jazzcash
    cnicNo: '',
    photo: '',
    coverImage: '',
    experience: '',
    bio: '',
    location: '', // city or town name
    address: '', // street address or salon address
    services: [
      {
        name: '',
        serviceDescription:'',
        price: 0,
        serviceImage : '', // added service images!
        timeSlots: [{ startTime: '',  }],
      },
    ],
    workingHours: [
      {
        day: '',
        dayOnOff : false,
        startTime: '',
        endTime: '',
      },
    ],

    });
  };

  return (
    
    <div className="bg-cover bg-center"
    style={{
      backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/0e73/4e64/60c98ac3e08d609fce1a7bca5c52a4cb?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m295LsxXL3g~oUexOFLtf8HhYM8cLIRlAsgSk5xfBPxc44uXVx~KJMuX9esDYleaSQC2FzJbr~EAkw~W80zIZ4m~bNeex9NRvhIThGWDdt~nJHMTGAabJKzZMurXRB44rUIIoddCRpucZj-u1rOVz4CLSkUVA5XapeXFcGJ-HgIQopQmfF6Zq4v9vWiw86uhx0oERiHqPOHmVd-LHiViEmon3rtONZQLzhkNGRlI9A1BWxVdX4ODZc~X02niN23-zicSXLaVPllejfya8iGneovA-pXAV0uoiYlnkUYnX0CM14lyMQfqYW7rfBh4hQh7T5GGY4FD2d8gViXU~1R-xg__")',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div className="bg-white border rounded-md shadow-md p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Salon Owner Registration</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Owner Name:</label>
            <input
              type="text"
              name='ownerName'
              value={formData.ownerName}
              onChange={hanldeInputChange}
              className="border rounded p-2 w-full"
              placeholder="Owner Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Salon Name:</label>
            <input
              type="text"
              name='salonName'
              value={formData.salonName}
              onChange={hanldeInputChange}
              className="border rounded p-2 w-full"
              placeholder="Salon Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name='email'
              value={formData.email}
              onChange={hanldeInputChange}
              className="border rounded p-2 w-full"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              name='password'
              value={formData.password}
              onChange={hanldeInputChange}
              className="border rounded p-2 w-full"
              placeholder="Password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Gender:</label>
            <select
              name='gender'
              value={formData.gender}
              onChange={hanldeInputChange}
              className="border rounded p-2 w-full"
            >
              <option value="" disabled>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="ohter">other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone:</label>
            <input
              type="text"
              name='phone'
              value={formData.phone}
              onChange={hanldeInputChange}
              className="border rounded p-2 w-full"
              placeholder="Phone"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">CNIC No:</label>
            <input
              type="text"
              name='cnicNo'
              value={formData.cnicNo}
              onChange={hanldeInputChange}
              className="border rounded p-2 w-full"
              placeholder="CNIC No"
              required
            />
          </div>

          <div className="col-span-2">
            <button
              type='submit'
              disabled={loading && true}
              className="bg-btnColor text-white py-2 px-4 rounded-full hover:bg-pink-700   w-full flex items-center justify-center gap-2"
            >
              {loading ? <HashLoader color='#fff' size={32} /> : 'Submit'}
              
            </button>

            <p className="mt-4">
              Already have an account?{' '}
              <Link to="/salonLogin" className="text-btnColor hover:text-pink-500 ">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SalonRegister;



