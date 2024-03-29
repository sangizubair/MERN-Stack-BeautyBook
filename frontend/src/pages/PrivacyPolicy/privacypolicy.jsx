import React from 'react';

const Privacypolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Privacy Policy - BeautyBook Pakistan</h2>
      <div className="text-lg text-gray-700">
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
          <h3 className="text-xl font-bold mb-2">Information We Collect:</h3>
          <ul className="list-disc pl-6">
            <li> Personal Information: We may collect personal information such as your name, email address, contact number, CNIC no, and location when you register on our platform or make a booking.</li>
            <li> Usage Information: We gather information about how you interact with our platform, including the pages you visit, the services you book, and the device and browser you use.</li>
            <li> Payment Information: If you choose to make online payments, our third-party payment processors may collect and store your payment details securely.</li>
          </ul>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
          <h3 className="text-xl font-bold mb-2">How We Use Your Information:</h3>
          <ul className="list-disc pl-6">
            <li> Service Delivery: We use your information to provide the services you request, including booking appointments and sending appointment reminders.</li>
            <li> Improving User Experience: Understanding how you use our platform helps us enhance your user experience by tailoring our services to your needs.</li>
            <li> Communication: We may use your contact information to send you important updates, newsletters, or promotional materials.</li>
          </ul>
        </div>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default Privacypolicy;
