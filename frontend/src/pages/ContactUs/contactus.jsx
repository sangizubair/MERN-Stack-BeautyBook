import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiUser, FiMail, FiMessageCircle } from 'react-icons/fi'; // Import icons from React Icons
import { RiContactsBook2Line } from 'react-icons/ri'; // Import contact book icon

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
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="flex justify-center">
      {/* Left side: Form */}
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto my-8 p-6 bg-white rounded-md shadow-md">
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
        <button type="submit" className="bg-btnColor text-white py-2 px-4 rounded-md hover:bg-pink-700 transition duration-300 ease-in-out">
          Send
        </button>
      </form>

      {/* Right side: Vector */}
      <div className="flex items-center mx-9 ">
        <RiContactsBook2Line className="text-9xl text-pink-500" />
      </div>
    </div>
  );
};

export default Contactus;
