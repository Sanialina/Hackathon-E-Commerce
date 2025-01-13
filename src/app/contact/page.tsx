import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="relative bg-cover bg-center h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/pg2-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="relative z-10 text-center">
          <img
            src="/pg2-logo.png"
            alt="Logo"
            className="mx-auto mb-4 w-24 h-24"
          />
          <p className="text-black text-lg font-semibold">Home &gt; Contact</p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          Get In Touch With Us
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side Info */}
          <div className="flex-1">
            {/* Address */}
            <div className="mb-6">
              <div className="flex items-center text-lg font-semibold mb-2">
                <FaMapMarkerAlt className="text-gray-700 mr-2 w-4 h-4" /> {/* Adjusted icon size */}
                Address
              </div>
              <p className="text-gray-600">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
            {/* Phone */}
            <div className="mb-6">
              <div className="flex items-center text-lg font-semibold mb-2">
                <FaPhoneAlt className="text-gray-700 mr-2 w-4 h-4" /> {/* Adjusted icon size */}
                Phone
              </div>
              <p className="text-gray-600">Mobile: +(84) 546-6789</p>
              <p className="text-gray-600">Hotline: +(84) 456-6789</p>
            </div>
            {/* Working Time */}
            <div>
              <div className="flex items-center text-lg font-semibold mb-2">
                <FaClock className="text-gray-700 mr-2 w-4 h-4" /> {/* Adjusted icon size */}
                Working Time
              </div>
              <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="flex-1">
            <form className="bg-white shadow-md rounded-lg p-6">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full border border-black text-black py-2 rounded-lg hover:bg-black hover:text-white transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-8 bg-[rgba(250,244,244,1)] mt-8">
        <div className="flex justify-between items-center flex-wrap">
          {/* Free Delivery */}
          <div className="flex flex-col items-center text-center mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold">Free Delivery</h3>
            <p className="text-sm mt-2">For all orders over $50, consectetur adipim scing elit.</p>
          </div>

          {/* 90 Days Return */}
          <div className="flex flex-col items-center text-center mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold">90 Days Return</h3>
            <p className="text-sm mt-2">If goods have problems, consectetur adipim scing elit.</p>
          </div>

          {/* Secure Payment */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold">Secure Payment</h3>
            <p className="text-sm mt-2">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
