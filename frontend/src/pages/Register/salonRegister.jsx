// import React, { useState } from 'react';

// const SalonRegister = () => {
//   const [formData, setFormData] = useState({
//     ownerName: '',
//     salonName: '',
//     email: '',
//     password: '',
//     gender: 'male',
//     phone: '',
//     photo: '',
//     experience: '',
//     bio: '',
//     location: '',
//     address: '',
//     services: [
//       {
//         name: '',
//         price: 0,
//         timeSlots: [{ day: '', startTime: '', endTime: '' }],
//       },
//     ],
//   });

//   const [submittedData, setSubmittedData] = useState([]);
//   const [showTable, setShowTable] = useState(true);
//   const [selectedRowIndex, setSelectedRowIndex] = useState(null);

//   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//   const handleServiceChange = (field, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       services: [
//         {
//           ...prevData.services[0],
//           [field]: value,
//         },
//       ],
//     }));
//   };

//   const handleTimeSlotChange = (timeSlotIndex, field, value) => {
//     setFormData((prevData) => {
//       const timeSlots = [...prevData.services[0].timeSlots];
//       timeSlots[timeSlotIndex][field] = value;
//       return {
//         ...prevData,
//         services: [
//           {
//             ...prevData.services[0],
//             timeSlots,
//           },
//         ],
//       };
//     });
//   };

//   const addTimeSlot = () => {
//     setFormData((prevData) => {
//       const timeSlots = [...prevData.services[0].timeSlots, { day: '', startTime: '', endTime: '' }];
//       return {
//         ...prevData,
//         services: [
//           {
//             ...prevData.services[0],
//             timeSlots,
//           },
//         ],
//       };
//     });
//   };

//   const removeTimeSlot = (timeSlotIndex) => {
//     setFormData((prevData) => {
//       const timeSlots = [...prevData.services[0].timeSlots];
//       timeSlots.splice(timeSlotIndex, 1);
//       return {
//         ...prevData,
//         services: [
//           {
//             ...prevData.services[0],
//             timeSlots,
//           },
//         ],
//       };
//     });
//   };

//   const addService = () => {
//     if (selectedRowIndex !== null) {
//       // If a row is selected, update the data at the selected index
//       setSubmittedData((prevData) => {
//         const newData = [...prevData];
//         newData[selectedRowIndex] = formData.services[0];
//         return newData;
//       });
//       setSelectedRowIndex(null);
//     } else {
//       // If no row is selected, add a new row to the table
//       setSubmittedData((prevData) => [...prevData, formData.services[0]]);
//     }

//     setFormData({
//       ownerName: '',
//       salonName: '',
//       email: '',
//       password: '',
//       gender: 'male',
//       phone: '',
//       photo: '',
//       experience: '',
//       bio: '',
//       location: '',
//       address: '',
//       services: [
//         {
//           name: '',
//           price: 0,
//           timeSlots: [{ day: '', startTime: '', endTime: '' }],
//         },
//       ],
//     });
//   };

//   const handleDelete = (index) => {
//     setSubmittedData((prevData) => {
//       const newData = [...prevData];
//       newData.splice(index, 1);
//       return newData;
//     });

//     // Clear the form data if the deleted row was being edited
//     if (index === selectedRowIndex) {
//       setFormData({
//         ownerName: '',
//         salonName: '',
//         email: '',
//         password: '',
//         gender: 'male',
//         phone: '',
//         photo: '',
//         experience: '',
//         bio: '',
//         location: '',
//         address: '',
//         services: [
//           {
//             name: '',
//             price: 0,
//             timeSlots: [{ day: '', startTime: '', endTime: '' }],
//           },
//         ],
//       });
//       setSelectedRowIndex(null);
//     }
//   };

//   const handleUpdate = (index) => {
//     setFormData({
//       ownerName: '',
//       salonName: '',
//       email: '',
//       password: '',
//       gender: 'male',
//       phone: '',
//       photo: '',
//       experience: '',
//       bio: '',
//       location: '',
//       address: '',
//       services: [{ ...submittedData[index] }],
//     });

//     setSelectedRowIndex(index);
//   };

//   const handleSubmit = () => {
//     // Send the form data to your backend for processing
//     console.log('Form Data:', formData);

//     // TODO: Add logic to send data to the database

//     // Reset the form after submission if needed
//     setFormData({
//       ownerName: '',
//       salonName: '',
//       email: '',
//       password: '',
//       gender: 'male',
//       phone: '',
//       photo: '',
//       experience: '',
//       bio: '',
//       location: '',
//       address: '',
//       services: [
//         {
//           name: '',
//           price: 0,
//           timeSlots: [{ day: '', startTime: '', endTime: '' }],
//         },
//       ],
//     });
//     setSelectedRowIndex(null);
//   };

//   return (
//     <div className="container mx-auto my-8">
//       <h2 className="text-2xl font-bold mb-4">Salon Services Listing</h2>
//       <form className="mb-8">
//         {/* ... Other form fields ... */}

//         {/* Services Section */}
//         <div className="mb-4">
//           <h3 className="text-xl font-semibold mb-2">Services</h3>
//           {formData.services.map((service, serviceIndex) => (
//             <div key={serviceIndex} className="flex mb-2">
//               <input
//                 type="text"
//                 value={service.name}
//                 onChange={(e) => handleServiceChange('name', e.target.value)}
//                 className="border rounded p-2 mr-2"
//                 placeholder="Service Name"
//               />
//               <input
//                 type="number"
//                 value={service.price}
//                 onChange={(e) => handleServiceChange('price', e.target.value)}
//                 className="border rounded p-2 mr-2"
//                 placeholder="Service Price"
//               />
//               {service.timeSlots.map((timeSlot, timeSlotIndex) => (
//                 <div key={timeSlotIndex} className="flex mb-2">
//                   <select
//                     value={timeSlot.day}
//                     onChange={(e) => handleTimeSlotChange(timeSlotIndex, 'day', e.target.value)}
//                     className="border rounded p-2 mr-2"
//                   >
//                     <option value="" disabled>Select a day</option>
//                     {daysOfWeek.map((day) => (
//                       <option key={day} value={day}>
//                         {day}
//                       </option>
//                     ))}
//                   </select>

//                   <input
//                     type="time"
//                     value={timeSlot.startTime}
//                     onChange={(e) => handleTimeSlotChange(timeSlotIndex, 'startTime', e.target.value)}
//                     className="border rounded p-2 mr-2"
//                   />

//                   <input
//                     type="time"
//                     value={timeSlot.endTime}
//                     onChange={(e) => handleTimeSlotChange(timeSlotIndex, 'endTime', e.target.value)}
//                     className="border rounded p-2 mr-2"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => removeTimeSlot(timeSlotIndex)}
//                     className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={addTimeSlot}
//                 className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-700"
//               >
//                 Add TimeSlot
//               </button>
//             </div>
//           ))}
//         </div>
//         {/* End Services Section */}

//         <button
//           type="button"
//           onClick={addService}
//           className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-700 mr-2"
//         >
//           {selectedRowIndex !== null ? 'Update Service' : 'Add Service'}
//         </button>

//         <button
//           type="button"
//           onClick={handleSubmit}
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </form>

//       {/* Display Submitted Data */}
//       <div className="mt-8">
//         <button
//           type="button"
//           onClick={() => setShowTable(!showTable)}
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mb-4"
//         >
//           {showTable ? 'Hide Table Data' : 'Show Table Data'}
//         </button>
//         {showTable && (
//           <div>
//             <h3 className="text-xl font-semibold mb-2">Submitted Data</h3>
//             <table className="w-full border">
//               <thead>
//                 <tr>
//                   <th className="border p-2">Service Name</th>
//                   <th className="border p-2">Service Price</th>
//                   <th className="border p-2">Time Slots</th>
//                   <th className="border p-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {submittedData.map((service, serviceIndex) => (
//                   <tr key={serviceIndex}>
//                     <td className="border p-2">{service.name}</td>
//                     <td className="border p-2">{service.price}</td>
//                     <td className="border p-2">
//                       <ul className="list-disc pl-4">
//                         {service.timeSlots.map((timeSlot, timeSlotIndex) => (
//                           <li key={timeSlotIndex}>
//                             {timeSlot.day} - {timeSlot.startTime} to {timeSlot.endTime}
//                           </li>
//                         ))}
//                       </ul>
//                     </td>
//                     <td className="border p-2">
//                       <button
//                         type="button"
//                         onClick={() => handleUpdate(serviceIndex)}
//                         className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700 mr-2"
//                       >
//                         Update
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => handleDelete(serviceIndex)}
//                         className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SalonRegister;


// import React, { useState } from 'react';

// const SalonRegister = () => {
//   const [formData, setFormData] = useState({
//     ownerName: '',
//     salonName: '',
//     email: '',
//     password: '',
//     gender: '',
//     role: 'salon',
//     phone: '',
//     cnicNo:'',
//     photo: '',
//     experience: '',
//     bio: '',
//     location: '',
//     address: '',
//     services: [
//       {
//         name: '',
//         price: 0,
//         timeSlots: [{ day: '', startTime: '', endTime: '' }],
//       },
//     ],
//   });

//   const [submittedData, setSubmittedData] = useState([]);
//   const [showTable, setShowTable] = useState(true);
//   const [selectedRowIndex, setSelectedRowIndex] = useState(null);

//   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//   const handleServiceChange = (field, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       services: [
//         {
//           ...prevData.services[0],
//           [field]: value,
//         },
//       ],
//     }));
//   };

//   const handleTimeSlotChange = (timeSlotIndex, field, value) => {
//     setFormData((prevData) => {
//       const timeSlots = [...prevData.services[0].timeSlots];
//       timeSlots[timeSlotIndex][field] = value;
//       return {
//         ...prevData,
//         services: [
//           {
//             ...prevData.services[0],
//             timeSlots,
//           },
//         ],
//       };
//     });
//   };

//   const addTimeSlot = () => {
//     setFormData((prevData) => {
//       const timeSlots = [...prevData.services[0].timeSlots, { day: '', startTime: '', endTime: '' }];
//       return {
//         ...prevData,
//         services: [
//           {
//             ...prevData.services[0],
//             timeSlots,
//           },
//         ],
//       };
//     });
//   };

//   const removeTimeSlot = (timeSlotIndex) => {
//     setFormData((prevData) => {
//       const timeSlots = [...prevData.services[0].timeSlots];
//       timeSlots.splice(timeSlotIndex, 1);
//       return {
//         ...prevData,
//         services: [
//           {
//             ...prevData.services[0],
//             timeSlots,
//           },
//         ],
//       };
//     });
//   };

//   const addService = () => {
//     // If a row is selected, update the data at the selected index
//     if (selectedRowIndex !== null) {
//       setSubmittedData((prevData) => {
//         const newData = [...prevData];
//         newData[selectedRowIndex] = formData.services[0];
//         return newData;
//       });
//       setSelectedRowIndex(null);
//     } else {
//       // If no row is selected, add a new row to the table
//       setSubmittedData((prevData) => [...prevData, formData.services[0]]);
//     }

//     setFormData({
//       ownerName: '',
//       salonName: '',
//       email: '',
//       password: '',
//       gender: '',
//       role: 'salon',
//       phone: '',
//       photo: '',
//       experience: '',
//       bio: '',
//       location: '',
//       address: '',
//       services: [
//         {
//           name: '',
//           price: 0,
//           timeSlots: [{ day: '', startTime: '', endTime: '' }],
//         },
//       ],
//     });
//   };

//   const handleUpdate = (index) => {
//     setFormData({
//       ownerName: '',
//       salonName: '',
//       email: '',
//       password: '',
//       gender: '',
//       role: 'salon',
//       phone: '',
//       photo: '',
//       experience: '',
//       bio: '',
//       location: '',
//       address: '',
//       services: [{ ...submittedData[index] }],
//     });

//     setSelectedRowIndex(index);
//   };

//   const handleUpdateService = () => {
//     // TODO: Add logic to send data to the database
//     console.log('Updating data in the database:', formData);
//   };

//   const handleDelete = (index) => {
//     setSubmittedData((prevData) => {
//       const newData = [...prevData];
//       newData.splice(index, 1);
//       return newData;
//     });

//     // Clear the form data if the deleted row was being edited
//     if (index === selectedRowIndex) {
//       setFormData({
//         ownerName: '',
//         salonName: '',
//         email: '',
//         password: '',
//         gender: '',
//         role: 'salon',
//         phone: '',
//         photo: '',
//         experience: '',
//         bio: '',
//         location: '',
//         address: '',
//         services: [
//           {
//             name: '',
//             price: 0,
//             timeSlots: [{ day: '', startTime: '', endTime: '' }],
//           },
//         ],
//       });
//       setSelectedRowIndex(null);
//     }
//   };

//   return (
//     <div className="container mx-auto my-8">
//       <h2 className="text-2xl font-bold mb-4">Salon Services Listing</h2>
//       <form className="mb-8">
//         {/* ... Other form fields ... */}

//         {/* Services Section */}
//         <div className="mb-4">
//           <h3 className="text-xl font-semibold mb-2">Services</h3>
//           {formData.services.map((service, serviceIndex) => (
//             <div key={serviceIndex} className="flex mb-2">
//               <input
//                 type="text"
//                 value={service.name}
//                 onChange={(e) => handleServiceChange('name', e.target.value)}
//                 className="border rounded p-2 mr-2"
//                 placeholder="Service Name"
//               />
//               <input
//                 type="number"
//                 value={service.price}
//                 onChange={(e) => handleServiceChange('price', e.target.value)}
//                 className="border rounded p-2 mr-2"
//                 placeholder="Service Price"
//               />
//               {service.timeSlots.map((timeSlot, timeSlotIndex) => (
//                 <div key={timeSlotIndex} className="flex mb-2">
//                   <select
//                     value={timeSlot.day}
//                     onChange={(e) => handleTimeSlotChange(timeSlotIndex, 'day', e.target.value)}
//                     className="border rounded p-2 mr-2"
//                   >
//                     <option value="" disabled>Select a day</option>
//                     {daysOfWeek.map((day) => (
//                       <option key={day} value={day}>
//                         {day}
//                       </option>
//                     ))}
//                   </select>

//                   <input
//                     type="time"
//                     value={timeSlot.startTime}
//                     onChange={(e) => handleTimeSlotChange(timeSlotIndex, 'startTime', e.target.value)}
//                     className="border rounded p-2 mr-2"
//                   />

//                   <input
//                     type="time"
//                     value={timeSlot.endTime}
//                     onChange={(e) => handleTimeSlotChange(timeSlotIndex, 'endTime', e.target.value)}
//                     className="border rounded p-2 mr-2"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => removeTimeSlot(timeSlotIndex)}
//                     className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={addTimeSlot}
//                 className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-700"
//               >
//                 Add TimeSlot
//               </button>
//             </div>
//           ))}
//         </div>
//         {/* End Services Section */}

//         <button
//           type="button"
//           onClick={addService}
//           className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-700 mr-2"
//         >
//           {selectedRowIndex !== null ? (
//             <button
//               type="button"
//               onClick={handleUpdateService}
//               className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-700 mr-2"
//             >
//               Update Service
//             </button>
//           ) : (
//             'Add Service'
//           )}
//         </button>
//       </form>

//       {/* Display Submitted Data */}
//       <div className="mt-8">
//         <button
//           type="button"
//           onClick={() => setShowTable(!showTable)}
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mb-4"
//         >
//           {showTable ? 'Hide Table Data' : 'Show Table Data'}
//         </button>
//         {showTable && (
//           <div>
//             <h3 className="text-xl font-semibold mb-2">Submitted Data</h3>
//             <table className="w-full border">
//               <thead>
//                 <tr>
//                   <th className="border p-2">Service Name</th>
//                   <th className="border p-2">Service Price</th>
//                   <th className="border p-2">Time Slots</th>
//                   <th className="border p-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {submittedData.map((service, serviceIndex) => (
//                   <tr key={serviceIndex}>
//                     <td className="border p-2">{service.name}</td>
//                     <td className="border p-2">{service.price}</td>
//                     <td className="border p-2">
//                       <ul className="list-disc pl-4">
//                         {service.timeSlots.map((timeSlot, timeSlotIndex) => (
//                           <li key={timeSlotIndex}>
//                             {timeSlot.day} - {timeSlot.startTime} to {timeSlot.endTime}
//                           </li>
//                         ))}
//                       </ul>
//                     </td>
//                     <td className="border p-2">
//                       <button
//                         type="button"
//                         onClick={() => handleUpdate(serviceIndex)}
//                         className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700 mr-2"
//                       >
//                         Update
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => handleDelete(serviceIndex)}
//                         className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

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
    cnicNo: '',
    photo: '', // 
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
    console.log('Submitting data to the database:', formData);
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
            />
          </div>

          <div className="col-span-2">
            <button
              type='submit'
              disabled={loading && true}
              className="bg-btnColor text-white py-2 px-4 rounded hover:bg-pink-700  w-full flex items-center justify-center gap-2"
            >
              {loading ? <HashLoader color='#fff' size={32} /> : 'Submit'}
              
            </button>

            <p className="mt-4">
              Already have an account?{' '}
              <Link to="/salonLogin" className="text-btnColor hover:text-pink-500">
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



