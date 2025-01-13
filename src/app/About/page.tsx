import Image from 'next/image';

import React from 'react'

const page = () => {
  return (
    <div>
        <div
                className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
                style={{ backgroundImage: "url('/pg2-1.jpg')" }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        
                {/* Logo */}
                <div className="relative z-10">
                  <Image src="/pg2-logo.png" alt="Logo" width={150} height={150} className="mx-auto" />
                </div>
        
                {/* Shop Header */}
                <div className="relative z-10 text-center text-black mt-4">
                  <h1 className="text-4xl md:text-5xl font-bold">About</h1>
                  <p className="text-sm md:text-lg mt-2">
                    <span className="text-black">Home</span> <span className="mx-2">&gt;</span> About
                  </p>
                </div>
              </div>


      <div> 
      <h1 className="text-4xl text-amber-500 text-center mt-8 mb-8 ">This page is not accessiable in Figma </h1>
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
  )
}

export default page
