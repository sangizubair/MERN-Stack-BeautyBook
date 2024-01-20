import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react';
import uploadImageToCloudinary from '../../utils/uploadCloudinary.js';
import { BASE_URL } from '../../../config.js';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader'
import { authContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { FaCamera } from 'react-icons/fa'; // Import the camera icon
// add icon add
import { MdAdd } from 'react-icons/md';
import { MdRemove } from 'react-icons/md';

const Profile = ({ userData }) => {  // yahan masla thaa

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(authContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ownerName: '',
    salonName: '',
    email: '',
    password: '',
    gender: '',
    role: 'salon',
    phone: '',
    cnicNo: '',

    // seperate bio section in profile setting
    photo: null, // cover images multiple images
    coverImage: [], // cover images multiple images
    experience: '', // experience in years
    bio: '',  // salon description
    location: '', // city or town name
    address: '', // street address or salon address


    services: [  // seperate services section in profile setting
      {
        name: '',
        serviceDescription: '',
        price: 0,
        timeSlots: [{ startTime: '', }],
      },
    ],

    workingHours: [  // seperate setWorkingHourse section in profile setting
      {
        day: '',
        dayOnOff: false, // false means off and true means on  radio button 
        startTime: '',
        endTime: '',
      },
    ],

  });


  // const [Services, setServices] = useState([]);
  const [showService , setShowService] = useState(true);
  const [WorkingHours, SetWorkingHours] = useState([]);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // function to show and hide service
  const toggleServicesVisibility = () => {
    setShowService((prev) => !prev);
  };

  useEffect(() => {
    setFormData({
      ownerName: userData.ownerName, salonName: userData.salonName, email: userData.email, password: userData.password, gender: userData.gender, phone: userData.phone, cnicNo: userData.cnicNo, coverImage: userData.coverImage || [], services: userData.services || [], workingHours: userData.workingHours || []
    });

    // setServices(userData.services || []);
    SetWorkingHours(userData.workingHours || []);

  }, [userData])

  const hanldeInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    // upload image into cloudinary
    const data = await uploadImageToCloudinary(file)
    console.log(data);
    // setPreviewUrl(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });

  };

  // upload cover images 
  const handleFileInputChangeForCoverImg = async (event) => {
    const files = event.target.files;
    const uploadedImages = [];

    for (const file of files) {
      const data = await uploadImageToCloudinary(file);
      uploadedImages.push(data.url);
    }

    setSelectedFile(uploadedImages[0]); // Assuming you want to display the first image as a preview
    setFormData({
      ...formData,
      coverImage: [...formData.coverImage, ...uploadedImages],
    });


  };

 // const [selectedTimeSlot, setSelectedTimeSlot] = useState([]);

  // const handleServiceChange = (index, field, value) => {
  //   const updatedServices = [...Services];
  //   updatedServices[index][field] = value;
  //   // If the field is 'timeSlots', initialize an empty time slot
  // if (field === 'timeSlots') {
  //   updatedServices[index].timeSlots = [{ startTime: '' }];
  // }

  //  setServices(updatedServices);
  // };


  // only for services section
  // const handleTimeSlotChange = (serviceIndex, timeSlotIndex, field, value) => {
  //   const updatedServices = [...Services];
  //   const timeSlot = updatedServices[serviceIndex].timeSlots[timeSlotIndex];
  //   timeSlot[field] = value;

  //   // Update the timeSlot string with the new timeSlot values
  //   updatedServices[serviceIndex].timeSlots[timeSlotIndex].timeSlot = ` ${timeSlot.startTime}`;

  //   setServices(updatedServices);
  // };


  // const addTimeSlot = (serviceIndex) => {
  //   const updatedServices = [...Services];
  //   const newTimeSlot = { startTime: '', };
  //   updatedServices[serviceIndex].timeSlots.push({ ...newTimeSlot, timeSlot: '' });
  //   setServices(updatedServices);
  // };

  // const removeTimeSlot = (serviceIndex, timeSlotIndex) => {
  //   const updatedServices = [...Services];
  //   const updatedTimeSlots = [...updatedServices[serviceIndex].timeSlots];

  //   updatedTimeSlots.splice(timeSlotIndex, 1);

  //   updatedServices[serviceIndex] = {
  //     ...updatedServices[serviceIndex],
  //     timeSlots: updatedTimeSlots,
  //   };

  //   setServices(updatedServices);
  // };




  // for workinghours only 
  // At the beginning of your component
  const handleWorkingHourChange = (index, field, value) => {
    const updatedWorkingHours = [...WorkingHours];
    updatedWorkingHours[index][field] = value;
    SetWorkingHours(updatedWorkingHours);
  };

  const addWorkingHour = () => {
    const updatedWorkingHours = [...WorkingHours];
    const newWorkingHour = { day: '', dayOnOff: false, startTime: '', endTime: '' };
    updatedWorkingHours.push(newWorkingHour);
    SetWorkingHours(updatedWorkingHours);
  };

  const removeWorkingHour = (index) => {
    const updatedWorkingHours = [...WorkingHours];
    updatedWorkingHours.splice(index, 1);
    SetWorkingHours(updatedWorkingHours);
  };




  const handleSaveServices = () => {
    // Perform save operation (e.g., send data to server)
    console.log('Saved Services:', Services);
    // For now, just log the services to the console
  };

  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...formData.services];
    updatedServices[index][field] = value;
    setFormData({
      ...formData,
      services: updatedServices,
    });
  };

  const addService = () => {
    setFormData({
      ...formData,
      services: [
        ...formData.services,
        {
          name: '',
          serviceDescription: '',
          price: 0,
          timeSlots: [{ startTime: '' }],
        },
      ],
    });
  };

  const removeService = (index) => {
    const updatedServices = [...formData.services];
    updatedServices.splice(index, 1);
    setFormData({
      ...formData,
      services: updatedServices,
    });
  };

  const addTimeSlot = (serviceIndex) => {
    const updatedServices = [...formData.services];
    updatedServices[serviceIndex].timeSlots.push({ startTime: '' });
    setFormData({
      ...formData,
      services: updatedServices,
    });
  };

  const removeTimeSlot = (serviceIndex, timeSlotIndex) => {
    const updatedServices = [...formData.services];
    updatedServices[serviceIndex].timeSlots.splice(timeSlotIndex, 1);
    setFormData({
      ...formData,
      services: updatedServices,
    });
  };


  const handleTimeSlotChange = (serviceIndex, timeSlotIndex, field, value) => {
    const updatedServices = [...formData.services];
    updatedServices[serviceIndex].timeSlots[timeSlotIndex][field] = value;
    setFormData({
      ...formData,
      services: updatedServices,
    });
  };






  const handleSubmit = async (event) => {
    // console.log("Form Data:", formData);
    event.preventDefault();
    setLoading(true);



    try {
      const updatedFormData = {
        ...formData,
         // Include the updated services data
        workingHours: WorkingHours, // Include the updated working hours data
      };

      const res = await fetch(`${BASE_URL}/salons/${userData._id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedFormData) // updated form data inlcude services

      })
      const { message } = await res.json()
      if (!res.ok) {
        throw new Error(message)
      }
      setLoading(false);
      // taost message
      toast.success(message)
      navigate(`/salon/profile/${userData._id}`)

    } catch (error) {
      toast.error(error.message);
      setLoading(false);

    }
    // Log the form data

    // agar submit pr click kre to post method chle or user register hojye 


  };

  return (
    <div>
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
          />
        </div>
        <div className='flex flex-col sm:flex-row mt-4 gap-3 items-center mb-5'>
          {formData.photo && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-white flex items-center justify-center'>
            <img
              src={formData.photo}
              className='w-full rounded-full'
              alt=''
            />
          </figure>}

          <div className='relative w-full sm:w-[130px] h-[40px]'>
            <input
              type='file'
              onChange={handleFileInputChange} // its imagehandle 
              name='photo'
              id='customFile'
              accept='.png, .jpg'
              className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
            />
            <label
              htmlFor='customFile'
              className='absolute top-0 left-0 w-full h-full flex items-center px-2 text-sm leading-4 overflow-visible bg-slate-100 text-headingColor font-semibold rounded-lg truncate cursor-pointer z-0'

            >
              {selectedFile ? selectedFile.name : 'Upload Photo'}
            </label>
          </div>

        </div>

        <div className="col-span-2">

          <hr className='mt-4' />

          <h2 className='text-xl font-semibold mt-4 mb-2'>Salon Details Section</h2>

          {/* experience: '', // experience in years
         bio: '',  // salon description
         location: '', // city or town name
         address: '', // street address or salon address */}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Experience:</label>
            <input
              type="text"
              name='experience'
              value={formData.experience}
              onChange={hanldeInputChange}
              className="border rounded p-2 w-full"
              placeholder="Experience"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Add Description:</label>
            <textarea
              name='bio'
              value={formData.bio}
              onChange={hanldeInputChange}
              className="border rounded p-2 w-full"
              placeholder="Bio"
            />
          </div>


          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Location:</label>
            <input
              type="text"
              name='location'
              value={formData.location}
              onChange={hanldeInputChange}
              className="border rounded p-2 w-full"
              placeholder="Location"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Address:</label>
            <input
              type="text"
              name='address'
              value={formData.address}
              onChange={hanldeInputChange}
              className="border rounded p-2 w-full"
              placeholder="Address"
            />
          </div>

          {/* add cover images */}
          {/* Cover Image Upload Section */}
          <div className='relative  w-full sm:w-[130px] h-[40px]'>
            <input
              key={selectedFile ? 'selectedFile' : 'fileInput'} // Add a key based on the selectedFile
              type='file'
              onChange={handleFileInputChangeForCoverImg}
              name='coverImages'
              id='customFile'
              accept='.png, .jpg'
              className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
            />
            <label
              htmlFor='customFile'
              className='absolute top-0 left-0 w-full h-full flex items-center px-2 text-sm leading-4 overflow-visible bg-slate-100 text-headingColor font-semibold rounded-lg truncate cursor-pointer z-0'
            >
              {/* <FaCamera className='mr-2' /> Camera icon */}
              {selectedFile ? selectedFile.name : <FaCamera className='mr-2' style={{ width: '30px', height: '30px' }} />}

            </label>
          </div>
          {/* ... other form fields */}
          {/* Display Uploaded Cover Images */}
          <div className='flex flex-wrap gap-3 mt-4'>
            {Array.isArray(formData.coverImage) &&
              formData.coverImage.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Cover Image ${index + 1}`}
                  className='w-[100px] h-[100px] object-cover rounded'
                />
              ))}
          </div>

          <hr className='mt-8' />




          {/* services: [  service section 
      {
        name: '',
        serviceDescription:'',
        price: 0,
        timeSlots: [{ day: '', startTime: '', endTime: '' }],
      },
    ], */}
          {/* service section */}
          {/* Services Section */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold mt-4 mb-2">Salon Service Section</h2>
            <button
          type="button"
          onClick={toggleServicesVisibility}
          className="bg-btnColor mt-4 text-white py-2 px-4 rounded hover:bg-pink-700 w-full flex items-center justify-center gap-2"
        >
          {showService ? 'Hide Services' : 'Show Services'}
        </button>
            {showService && (
              <>

            {formData.services.map((service, serviceIndex) => (
              <div key={serviceIndex}>
                {/* ... existing fields */}
                <label className="block text-sm font-medium text-gray-700">Service Name:</label>
                <input
                  type="text"
                  value={service.name}
                  onChange={(e) => handleServiceChange(serviceIndex, 'name', e.target.value)}
                  className="border rounded p-2 w-full"
                  placeholder="Service Name"
                />
                <label className="block text-sm font-medium text-gray-700">Service Description:</label>
                <textarea
                  type="text"
                  value={service.serviceDescription}
                  onChange={(e) =>
                    handleServiceChange(serviceIndex, 'serviceDescription', e.target.value)
                  }
                  className="border rounded p-2 w-full"
                  placeholder="Service Description"
                />
                <label className="block text-sm font-medium text-gray-700">Price:</label>
                <input
                  type="number"
                  value={service.price}
                  onChange={(e) => handleServiceChange(serviceIndex, 'price', e.target.value)}
                  className="border rounded p-2 w-full"
                  placeholder="Price"
                />
                <h3 className="text-lg font-semibold mt-2 mb-1">Time Slots</h3>
                {service.timeSlots.map((timeSlot, timeSlotIndex) => (
                  <div key={timeSlotIndex}>
                    <label className="block text-sm font-medium text-gray-700">Time Slot:</label>
                    <input
                      type="time"
                      value={timeSlot.startTime}
                      onChange={(e) =>
                        handleTimeSlotChange(serviceIndex, timeSlotIndex, 'startTime', e.target.value)
                      }
                      className="border rounded p-2 w-full"
                    />

                    {/* <button type="button" onClick={() => addTimeSlot(serviceIndex)}>
                      <div className="flex items-center">
                        <MdAdd />
                        <span className="mr-2">Add Time Slot</span>
                      </div>
                    </button> */}

                    <button type="button" onClick={() => removeTimeSlot(serviceIndex, timeSlotIndex)}>
                      <div className="flex items-center">
                        <MdRemove />
                        <span className="mr-2">Remove Time Slot</span>
                      </div>
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => addTimeSlot(serviceIndex)}
                  className="bg-btnColor mt-4 text-white py-2 px-4 rounded hover:bg-pink-700 w-full flex items-center justify-center gap-2"
                >
                  Add Time Slot
                </button>

                <button
                type="button"
                onClick={() => removeService(serviceIndex)}
                className="bg-btnColor mt-4 text-white py-2 px-4 rounded hover:bg-pink-700 w-full flex items-center justify-center gap-2"
              >
                Remove Service
              </button>
                {/* ... existing fields */}
                {/* <button type="button" onClick={() => addTimeSlot(serviceIndex)}>
                  <div className="flex items-center">
                    <MdAdd />
                    <span className="mr-2">Add</span>
                  </div>
                </button>

                <button type="button" onClick={() => removeService(serviceIndex)}>
                  <div className="flex items-center">
                    <MdRemove />
                    <span className="mr-2">Remove</span>
                  </div>
                </button> */}
              </div>
            ))}

            <button
              type="button"
              onClick={addService}
              className="bg-btnColor mt-6 text-white py-2 px-4 rounded hover:bg-pink-700 w-full flex items-center justify-center gap-2"
            >
              Add New Service
            </button>
            </>
            )}
          </div>


          {/* Services Section */}
          {/* <div className="col-span-2">
            <h2 className='text-xl font-semibold mt-4 mb-2'>Salon Service Section</h2>
            
            {Services.map((service, serviceIndex) => (
              <div key={serviceIndex}>
               
                <label className="block text-sm font-medium text-gray-700">Service Name:</label>
                <input
                  type="text"
                  value={service.name}
                  onChange={(e) => handleServiceChange(serviceIndex, 'name', e.target.value)}
                  className="border rounded p-2 w-full"
                  placeholder="Service Name"
                />
                <label className="block text-sm font-medium text-gray-700">Service Description:</label>
                <textarea
                  type="text"
                  value={service.serviceDescription}
                  onChange={(e) => handleServiceChange(serviceIndex, 'serviceDescription', e.target.value)}
                  className="border rounded p-2 w-full"
                  placeholder="Service Description"
                />
                <label className="block text-sm font-medium text-gray-700">Price:</label>
                <input
                  type="number"
                  value={service.price}
                  onChange={(e) => handleServiceChange(serviceIndex, 'price', e.target.value)}
                  className="border rounded p-2 w-full"
                  placeholder="Price"
                /> */}

          {/* Time Slots Section */}
          {/* <h3 className="text-lg font-semibold mt-2 mb-1">Time Slots</h3>
                {service.timeSlots.map((timeSlot, timeSlotIndex) => (
                
                  <div key={timeSlotIndex}> */}
          {/* <label className="block text-sm font-medium text-gray-700">Day:</label>
                  <select
                    value={timeSlot.day}
                    onChange={(e) =>
                      handleTimeSlotChange(serviceIndex, timeSlotIndex, 'day', e.target.value)
                    }
                    className="border rounded p-2 w-full"
                  >
                    <option value="" disabled>
                      Select day
                    </option>
                    {daysOfWeek.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select> */}
          {/* <label className="block text-sm font-medium text-gray-700">Time slots:</label>
                    <input
                      type="time"
                      value={timeSlot.startTime}
                      onChange={(e) =>
                        handleTimeSlotChange(serviceIndex, timeSlotIndex, 'startTime', e.target.value)
                      }
                      className="border rounded p-2 w-full"
                    />   */}
          {/* <label className="block text-sm font-medium text-gray-700">End Time:</label>
                  <input
                    type="time"
                    value={timeSlot.endTime}
                    onChange={(e) =>
                      handleTimeSlotChange(serviceIndex, timeSlotIndex, 'endTime', e.target.value)
                    }
                    className="border rounded p-2 w-full"
                  /> */}



          {/* </div>

                  
                  
                  ))}
                <button type="button" onClick={() => addTimeSlot(serviceIndex)}>
                  <div className="flex items-center">
                    <MdAdd />
                    <span className='mr-2'>Add</span>
                  </div>
                </button>
                 

                <button
                  type="button"
                  onClick={() => removeTimeSlot(serviceIndex)}
                >
                  <div className="flex items-center">
                    < MdRemove/>
                    <span className='mr-2'>Remove</span>
                  </div>
                </button>

              </div>
            ))}


            <button
              type="button"
              onClick={handleSaveServices}
              className="bg-btnColor mt-4 text-white py-2 px-4 rounded hover:bg-pink-700 w-full flex items-center justify-center gap-2"
            >
              Save Services
            </button>
          </div> */}



          <hr className='mt-8' />
          <div className="col-span-2">
            <h2 className='text-xl font-semibold mt-4 mb-2'>Set Working Hours</h2>

            {WorkingHours.map((workingHours, index) => (
              <div key={index}>
                <div className='flex justify-between gap-3 items-center'>
                  <label className="block text-sm font-medium text-gray-700">Day:</label>
                  <select
                    value={workingHours.day}
                    onChange={(e) =>
                      handleWorkingHourChange(index, 'day', e.target.value)
                    }
                    className="border rounded p-2 w-full"
                  >
                    <option value="" disabled>
                      Select day
                    </option>
                    {daysOfWeek.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>


                  <label className="block text-sm font-medium text-gray-700">On/Off:</label>
                  <select
                    value={workingHours.dayOnOff}
                    onChange={(e) =>
                      handleWorkingHourChange(index, 'dayOnOff', e.target.value === 'true')
                    }
                    className="border rounded p-2 w-full"
                  >
                    <option value={false}>Off</option>
                    <option value={true}>On</option>
                  </select>
                </div>

                <div className='flex justify-between gap-3 items-center mt-4'>
                  <label className="block text-sm font-medium text-gray-700">Start Time:</label>
                  <input
                    type="time"
                    value={workingHours.startTime}
                    onChange={(e) =>
                      handleWorkingHourChange(index, 'startTime', e.target.value)
                    }
                    className="border rounded p-2 w-full"
                  />
                  <label className="block text-sm font-medium text-gray-700">End Time:</label>
                  <input
                    type="time"
                    value={workingHours.endTime}
                    onChange={(e) =>
                      handleWorkingHourChange(index, 'endTime', e.target.value)
                    }
                    className="border rounded p-2 w-full"
                  />
                </div>

                {/* ... (other form fields for working hours) */}
              </div>
            ))}

            <div className='mt-4'>
              <button
                type="button"
                onClick={addWorkingHour}
              >
                <div className="flex items-center">
                  <MdAdd />
                  <span className='mr-2'>Add</span>
                </div>
              </button>
              <button
                type="button"
                onClick={removeWorkingHour}
              >
                <div className="flex items-center">
                  <MdRemove />
                  <span className='mr-2'>Remove</span>
                </div>
              </button>
            </div>

          </div>

          <div className="col-span-2 mt-4">
            <h2 className='text-xl font-semibold mb-2'>Working Hours</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Day
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    On/Off
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Start Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    End Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {WorkingHours.map((workingHours, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {workingHours.day}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {workingHours.dayOnOff ? 'On' : 'Off'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {workingHours.startTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {workingHours.endTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            type='submit'
            disabled={loading && true}
            className="bg-btnColor mt-4 text-white py-2 px-4 rounded hover:bg-pink-700  w-full flex items-center justify-center gap-2"
          >
            {loading ? <HashLoader color='#fff' size={32} /> : 'Update'}

          </button>

          {/* <p className="mt-4">
              Already have an account?{' '}
              <Link to="/salonLogin" className="text-btnColor hover:text-pink-500">
                Login
              </Link>
            </p> */}


        </div>
      </form>
    </div>
  )
}

export default Profile