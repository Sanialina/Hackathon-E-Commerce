import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-container w-full max-w-[1440px] h-[400px] relative flex flex-col md:flex-row justify-between items-start md:items-center border-t px-4 py-6 md:py-10">
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 md:relative md:left-0 md:top-0">
        <p className="text-sm text-slate-400">
          400 University Drive Suite 200 Coral Gables, <br/> FL 33134 USA
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full h-full space-y-6 md:space-y-0 justify-between md:justify-end items-center md:items-start md:space-x-20">
        {/* Links Section */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-lg font-semibold mb-6 md:mb-10 text-slate-400">Links</p>
          <div className="flex flex-col space-y-4">
            <p className="text-sm">Home</p>
            <p className="text-sm">Shop</p>
            <p className="text-sm">About</p>
            <p className="text-sm">Contact</p>
          </div>
        </div>

        {/* Help Section */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-lg font-semibold mb-6 md:mb-10 text-slate-400">Help</p>
          <div className="flex flex-col space-y-4">
            <p className="text-sm">Payment Options</p>
            <p className="text-sm">Returns</p>
            <p className="text-sm">Privacy Policy</p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-lg font-semibold mb-6 md:mb-10 text-slate-400">Newsletter</p>
          <input
            type="email"
            placeholder="Enter email address"
            className=" text-slate-400 underline px-8 py-2 text-sm w-full md:w-48"/>     
        </div>

        <div className="flex flex-col space-y-6 text-black underline md:mt-0 mt-10">
          <p className="text-lg text-center md:text-left">Subscribe</p>
        </div>
      </div>

      {/* Footer copyright text - positioned at bottom-left */}
      <div className="absolute bottom-2 left-10">
        <p className="text-xs text-black">
          2022 Meubel House . . All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
