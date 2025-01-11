"use client"
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaSquareTwitter } from "react-icons/fa6";
import { useCart } from "@/app/context/CartContext";

export default function SingleProduct3() {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      id: "asgaard-sofa",
      name: "Asgaard Sofa",
      price: 250000,
      quantity: 1,
      image: "/pg2-11.png"
    };
    addToCart(product);
    alert("Product added to cart!");
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      {/* Breadcrumb Section */}
      <div className="text-sm text-gray-500 mb-4">
        Home &gt; Shop &gt; | <span className="font-semibold">Asgaard Sofa</span>
      </div>

      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1">
          <Image
            src="/pg2-11.png"
            alt="Asgaard Sofa"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-4">
          {/* Product Title */}
          <h1 className="text-3xl font-bold">Asgaard Sofa</h1>

          {/* Product Price */}
          <p className="text-2xl font-semibold text-gray-800">Rs. 250,000.00</p>

          {/* Customer Reviews */}
          <div className="flex items-center space-x-2">
            <Image src="/5stars.png" alt="5 Stars" width={100} height={20} />
            <p className="text-gray-600"> | 5 Customer Review</p>
          </div>

          {/* Product Description */}
          <p className="text-gray-600">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
            highs for a sound.
          </p>

          {/* Size Options */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Size</h3>
            <div className="flex space-x-2">
              <div className="w-10 h-10 flex items-center justify-center bg-[#FBEBB5] rounded-md">
                L
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md">
                XL
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md">
                XS
              </div>
            </div>
          </div>

          {/* Color Options */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Color</h3>
            <div className="flex space-x-3">
              <div className="w-8 h-8 rounded-full bg-indigo-700"></div>
              <div className="w-8 h-8 rounded-full bg-black"></div>
              <div className="w-8 h-8 rounded-full bg-yellow-600"></div>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="border px-4 py-2 rounded-md">- 1 +</div>
            <button
              onClick={handleAddToCart}
              className="border px-6 py-2 rounded-md bg-black text-white hover:bg-gray-800"
            >
              Add To Cart
            </button>
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-semibold">SKU :</span> SS001
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Category :</span> Sofas
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Tags :</span> Sofa, Chair, Home, Shop
            </p>
          </div>

          {/* Social Share */}
          <div>
            <h3 className="font-semibold text-gray-800">Share:</h3>
            <div className="flex space-x-4 text-xl text-gray-600">
              <FaFacebook />
              <FaLinkedin />
              <FaSquareTwitter />
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="mt-40 text-center space-y-8">
        {/* Headings */}
        <div className="space-x-6 text-lg font-semibold">
          <span>Description</span>
          <span>Additional Information</span>
          <span>Reviews [5]</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 max-w-4xl mx-auto text-justify leading-relaxed">
          Embodying the raw, wayward spirit of rockroll, the Kilburn portable active stereo speaker
          takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the
          road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
          engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a
          compact, stout hearted hero with a well balanced audio which boasts a clear midrange and
          extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you
          to fine tune the controls to your personal preferences while the guitar influenced leather strap
          enables easy and stylish travel.
        </p>

        {/* Images */}
        <div className="flex justify-center mt-8 space-x-8">
          {/* Image 1 */}
          <div className="bg-[#f5e9c3] p-4 rounded-lg">
            <Image
              src="/pg3-1.png"
              alt="Image 1"
              width={500}
              height={200}
              className="rounded-lg"
            />
          </div>

          {/* Image 2 */}
          <div className="bg-[#faeec6] p-4 rounded-lg">
            <Image
              src="/pg3-2.png"
              alt="Image 2"
              width={500}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-40 text-center">
        <h2 className="text-2xl font-semibold mb-6">Related Products</h2>

        {/* Grid of Related Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="text-center">
            <Image src="/pg1-3.png" alt="Product 1" width={300} height={200} className="rounded-lg" />
            <h3 className="mt-2 font-semibold">Trenton modular sofa_3</h3>
            <p className="text-lg font-semibold text-gray-800">Rs. 25,000.00</p>
          </div>

          {/* Product 2 */}
          <div className="text-center">
            <Image src="/pg1-4.png" alt="Product 2" width={300} height={200} className="rounded-lg" />
            <h3 className="mt-2 font-semibold">Trenton modular sofa_3</h3>
            <p className="text-lg font-semibold text-gray-800">Rs. 25,000.00</p>
          </div>

          {/* Product 3 */}
          <div className="text-center">
            <Image src="/pg1-5.png" alt="Product 3" width={300} height={200} className="rounded-lg" />
            <h3 className="mt-2 font-semibold">Trenton modular sofa_3</h3>
            <p className="text-lg font-semibold text-gray-800">Rs. 25,000.00</p>
          </div>

          {/* Product 4 */}
          <div className="text-center">
            <Image src="/pg1-6.png" alt="Product 4" width={300} height={200} className="rounded-lg" />
            <h3 className="mt-2 font-semibold">Trenton modular sofa_3</h3>
            <p className="text-lg font-semibold text-gray-800">Rs. 25,000.00</p>
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-6">
          <a href="#" className="text-black font-semibold border-b-2 border-black hover:text-gray-600">View More</a>
        </div>
      </div>
    </div>
  );
}
