import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiUser, FiMail, FiMessageCircle } from 'react-icons/fi'; // Import icons from React Icons
import { RiContactsBook2Line } from 'react-icons/ri'; // Import contact book icon
import { toast } from 'react-toastify';
const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dolx938', 'template_yovh8r9', form.current, {
        publicKey: 'ZCGOXO_HyGIAN91W3',
      })
      .then(
        () => {
          toast.success('Email sent successfully!');
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="flex flex-col items-center sm:flex-row justify-evenly container">
      {/* Left side: Form */}
      <form ref={form} onSubmit={sendEmail} className="w-full max-w-[500px] sm:w-[600px] md:w-[800px] lg:w-[1000px] mx-auto my-8 p-6 bg-white rounded-md shadow-md border-2">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Name</label>
          <div className="flex items-center">
            <FiUser className="text-gray-500 mr-2" />
            <input type="text" name="from_name" className="w-full border rounded-md py-2 px-3" />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Email</label>
          <div className="flex items-center">
            <FiMail className="text-gray-500 mr-2" />
            <input type="email" name="from_email" className="w-full border rounded-md py-2 px-3" />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Message</label>
          <div className="flex items-center">
            <FiMessageCircle className="text-gray-500 mr-2" />
            <textarea name="message" className="w-full border rounded-md py-2 px-3"></textarea>
          </div>
        </div>
        <button  type="submit" className="bg-btnColor text-white py-2 px-4 rounded-md w-full hover:bg-pink-700 transition duration-300 ease-in-out">
          Send   
        </button>
      </form>

      {/* Right side: Vector */}
      <div className="flex items-center mx-10">
        <RiContactsBook2Line className="text-9xl text-pink-500"  />
      </div>
    </div>
  );
};

export default Contactus;
