// pages/myAccount.tsx
import React from "react";

const MyAccount = () => {
  return (
    <div>
      {/* First Section: Background Image */}
      <div className="relative w-full h-[300px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/pg2-1.jpg')" }}>
        {/* Overlay with blur */}
        <div className="absolute inset-0 bg-white bg-opacity-50 blur-sm"></div>
        
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center w-full h-full text-black p-4">
          {/* Logo */}
          <div className="mb-4">
            <img
              src="/pg2-logo.png"
              alt="Logo"
              className="w-32 h-auto" // Adjust the size of the logo here
            />
          </div>

          {/* "My Account" text */}
          <h1 className="text-3xl font-bold mb-2">My Account</h1>

          {/* Breadcrumb */}
          <p className="text-lg">
            Home {'>'} <span className="font-semibold">My Account</span>
          </p>
        </div>
      </div>

      {/* Second Section: Log In and Register */}
      <div className="flex flex-col md:flex-row p-4 gap-8 mt-8">
        {/* Log In Section (Left Side) */}
        <div className="flex-1 mb-8 md:mb-0 flex justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
            <div className="space-y-4">
              {/* Username and Email */}
              <div>
                <label htmlFor="login-email" className="block text-lg">Username and Email Address</label>
                <input
                  type="email"
                  id="login-email"
                  placeholder="Enter your email"
                  className="w-full sm:w-80 border border-gray-500 p-2 rounded-md" // Decreased width and made it responsive
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="login-password" className="block text-lg">Password</label>
                <input
                  type="password"
                  id="login-password"
                  placeholder="Enter your password"
                  className="w-full sm:w-80 border border-gray-500 p-2 rounded-md" // Decreased width and made it responsive
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me" className="text-lg">Remember me</label>
              </div>

              {/* Log In Button */}
              <button className="w-full sm:w-40 hover:bg-slate-500 border border-black font-bold p-2 rounded-md mt-4">Log In</button> {/* Decreased width */}
            </div>
          </div>
        </div>

        {/* Register Section (Right Side) */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
            <div className="space-y-4">
              {/* Email Address */}
              <div>
                <label htmlFor="register-email" className="block text-lg">Email Address</label>
                <input
                  type="email"
                  id="register-email"
                  placeholder="Enter your email"
                  className="w-full sm:w-80 border border-gray-500 p-2 rounded-md" // Decreased width and made it responsive
                />
              </div>

              {/* Information Text */}
              <div className="text-left text-sm space-y-2">
                <p>A link to set a new password will be sent to your email address.</p>
                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
              </div>

              {/* Register Button */}
              <button className="w-full sm:w-40 hover:bg-slate-500 border border-black p-2 rounded-md mt-4 font-bold">Register</button> {/* Decreased width */}
            </div>
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

export default MyAccount;
