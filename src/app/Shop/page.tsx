import Link from "next/link";
import Image from "next/image";

const productData = [
  { img: "/pg1-3.png", title: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
  { img: "/pg1-4.png", title: "Granite dining table with dining chair", price: "Rs. 25,000.00" },
  { img: "/pg1-5.png", title: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
  { img: "/pg1-6.png", title: "Plain console with teak mirror", price: "Rs. 25,000.00" },
  { img: "/pg2-2.png", title: "Grain coffee table", price: "Rs. 15,000.00" },
  { img: "/pg2-3.png", title: "Kent coffee table", price: "Rs. 225,000.00" },
  { img: "/pg2-4.png", title: "Round coffee table_color 2", price: "Rs. 251,000.00" },
  { img: "/pg2-5.png", title: "Reclaimed teak coffee table", price: "Rs. 25,200.00" },
  { img: "/pg2-6.png", title: "Plain console_", price: "Rs. 258,200.00" },
  { img: "/pg2-7.png", title: "Reclaimed teak Sideboard", price: "Rs. 20,000.00" },
  { img: "/pg2-8.png", title: "SJP_0825 ", price: "Rs. 200,000.00" },
  { img: "/pg2-9.png", title: "Bella chair and table", price: "Rs. 100,000.00" },
  { img: "/pg2-10.png", title: "Granite square side table", price: "Rs. 258,800.00" },
  { img: "/pg2-11.png", title: "Asgaard sofa", price: "Rs. 250,000.00" },
  { img: "/pg2-12.png", title: "Maya sofa three seater", price: "Rs. 115,000.00" },
  { img: "/pg2-13.png", title: "Outdoor sofa set", price: "Rs. 244,000.00" },
];

export default function ShopPage() {
  return (
    <div>
      {/* Header Section */}
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
          <h1 className="text-4xl md:text-5xl font-bold">Shop</h1>
          <p className="text-sm md:text-lg mt-2">
            <span className="text-black">Home</span> <span className="mx-2">&gt;</span> Shop
          </p>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="w-full px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {productData.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Conditionally add Link for the specific image */}
            {product.img === "/pg2-11.png" ? (
              <Link href="/singleproduct3">
                <Image
                  src={product.img} // Direct image path from public folder
                  alt={product.title}
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover cursor-pointer"
                />
              </Link>
            ) : (
              <Image
                src={product.img} // Direct image path from public folder
                alt={product.title}
                width={400}
                height={200}
                className="w-full h-auto object-cover"
              />
            )}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-xl font-bold text-black mt-2">{product.price}</p>
            </div>
          </div>
        ))}
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
