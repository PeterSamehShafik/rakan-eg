import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const SmallNavbar = () => (
  <div className="bg-gray-200 py-2">
    <div className="container mx-auto flex justify-between items-center px-4">
      <div className="text-gray-600 font-medium flex items-center space-x-4">
        <a href="tel:1234567890" className="flex items-center space-x-2 hover:text-gray-900">
          <FaPhoneAlt />
          <span>123-456-7890</span>
        </a>
        <a href="mailto:info@example.com" className="flex items-center space-x-2 hover:text-gray-900">
          <FaEnvelope />
          <span>info@example.com</span>
        </a>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={30} className="text-gray-700 bg-white rounded-full p-2 shadow hover:bg-red-800 hover:text-white transition duration-300" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={30} className="text-gray-700 bg-white rounded-full p-2 shadow hover:bg-red-800 hover:text-white transition duration-300" />
        </a>
      </div>
    </div>
  </div>
);

export default SmallNavbar;
