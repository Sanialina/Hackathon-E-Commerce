"use client";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Background Image Section */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('/pg2-1.jpg')" }}>
        <div className="absolute inset-0 bg-white opacity-60"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center">
          <Image src="/pg2-logo.png" alt="Logo" width={120} height={120} className="mb-4" />
          <p className="text-black text-lg font-medium">Home &gt; Checkout</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Billing Details Form */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <label className="block mb-2 font-medium">First Name</label>
                <input
                  type="text"
                  className="w-full border border-black rounded-lg px-4 py-2"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 font-medium">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-black rounded-lg px-4 py-2"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block mb-2 font-medium">Company Name (Optional)</label>
              <input
                type="text"
                className="w-full border border-black rounded-lg px-4 py-2"
                placeholder="Company Name"
              />
            </div>

            {/* Country Dropdown */}
            <div>
              <label className="block mb-2 font-medium">Country</label>
              <select className="w-full border border-black rounded-lg px-4 py-2">
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
              </select>
            </div>

            {/* Street Address */}
            <div>
              <label className="block mb-2 font-medium">Street Address</label>
              <textarea
                className="w-full border border-black rounded-lg px-4 py-2"
                placeholder="Street Address"
                rows={3}
              ></textarea>
            </div>

            {/* Town/City */}
            <div>
              <label className="block mb-2 font-medium">Town/City</label>
              <input
                type="text"
                className="w-full border border-black rounded-lg px-4 py-2"
                placeholder="Town/City"
                required
              />
            </div>

            {/* Province Dropdown */}
            <div>
              <label className="block mb-2 font-medium">Province</label>
              <select className="w-full border border-black rounded-lg px-4 py-2">
                <option value="">Select Province</option>
                <option value="Sindh">Sindh</option>
                <option value="Punjab">Punjab</option>
                <option value="Balochistan">Balochistan</option>
              </select>
            </div>

            {/* Zip Code */}
            <div>
              <label className="block mb-2 font-medium">Zip Code</label>
              <input
                type="text"
                className="w-full border border-black rounded-lg px-4 py-2"
                placeholder="Zip Code"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-medium">Phone</label>
              <input
                type="tel"
                className="w-full border border-black rounded-lg px-4 py-2"
                placeholder="Phone"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                className="w-full border border-black rounded-lg px-4 py-2"
                placeholder="Email Address"
                required
              />
            </div>
          </form>
        </div>

        {/* Product Details Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Product</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Product Name: <strong>Asgaard Sofa</strong>
            </p>
            <p className="text-lg">
              Subtotal: <strong>Rs. 30,000</strong>
            </p>
            <p className="text-lg">
              Total: <strong>Rs. 30,000</strong>
            </p>
          </div>

          {/* Payment Method */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Direct Bank Transfer</h3>
            <p className="text-gray-600 text-center">
              Make your payment directly into our bank account. Please use your Order ID as the
              payment reference. Your order will not be shipped until the funds have cleared in
              our account.
            </p>
          </div>

          {/* Payment Options */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <input type="radio" name="payment" id="bank-transfer" className="mr-2" />
              <label htmlFor="bank-transfer">Direct Bank Transfer</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="payment" id="cod" className="mr-2" />
              <label htmlFor="cod">Cash On Delivery</label>
            </div>
          </div>

          {/* Privacy Text */}
          <div className="mt-6">
            <p className="text-gray-600 text-center">
              Your personal data will be used to support your experience throughout this website,
              to manage access to your account, and for other purposes described in our privacy
              policy.
            </p>
          </div>

          {/* Place Order Button */}
          <button className="w-full mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Place Order
          </button>
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
}
