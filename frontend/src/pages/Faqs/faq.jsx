import React from 'react'

const faq = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <h2 className="text-2xl font-bold mb-4">Frequently Asked  Questions </h2>
    {/* Frequently Asked Questions */}
    <div className="space-y-6">
      {/* FAQ 1 */}
      <div className="bg-gray-100 p-4 border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">What is BeautyBook Pakistan?</h3>
        <p className="text-gray-700">
          BeautyBook Pakistan is a revolutionary platform that simplifies the process of booking beauty and grooming services.
          It connects customers with nearby salons, offering a seamless experience for discovering, booking, and enjoying a variety of beauty services.
        </p>
      </div>
      {/* FAQ 2 */}
      <div className="bg-gray-100 p-4 border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">How can I use BeautyBook to book salon appointments?</h3>
        <p className="text-gray-700">
        Using BeautyBook is easy! Simply visit our website ( beautybook.online ) Browse through nearby salons, choose your desired services, and book your appointment with just a few clicks.
        </p>
      </div>
       {/* FAQ 3 */}
       <div className="bg-gray-100 p-4 border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">What beauty services are available on BeautyBook?</h3>
        <p className="text-gray-700">
        BeautyBook offers a wide range of services, including hairstyling, spa treatments, and more. Explore our app or website to discover the diverse beauty services provided by our partnered salons.
        </p>
      </div>
       {/* FAQ 4 */}
       <div className="bg-gray-100 p-4 border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">How do I receive appointment reminders?</h3>
        <p className="text-gray-700">
        BeautyBook sends timely appointment reminders via SMS. This ensures that you never miss your scheduled beauty appointment.        </p>
      </div>

       {/* FAQ 5 */}
       <div className="bg-gray-100 p-4 border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Is BeautyBook available throughout Pakistan?</h3>
        <p className="text-gray-700">
        No, Initially BeautyBook operates just Jamshoro and Hyderabad, connecting customers with salons .      </p>
      </div>
      {/* Add more FAQs as needed */}
    </div>
  </div>
  )
}

export default faq