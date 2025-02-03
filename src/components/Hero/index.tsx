import Image from 'next/image';
import Link from 'next/link';
import { IoCalendarClearOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";


const Hero = () => {
    // Create an array of objects to store the details for each image
    const topPicks = [
        {
            src: "/pg1-3.png",
            alt: "Top Pick 1",
            description: "Trenton modular sofa_3",
            price: "Rs. 25,000.00",
            width: 400,
            height: 400
        },
        {
            src: "/pg1-4.png",
            alt: "Top Pick 2",
            description: "Granite dining table with dining chair",
            price: "Rs. 25,000.00",
            width: 400,
            height: 300
        },
        {
            src: "/pg1-5.png",
            alt: "Top Pick 3",
            description: "Outdoor bar table and stool",
            price: "Rs. 25,000.00",
            width: 300,
            height: 300
        },
        {
            src: "/pg1-6.png",
            alt: "Top Pick 4",
            description: "Plain console with teak mirror",
            price: "Rs 25,000.00",
            width: 450,
            height: 450
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <main className="relative bg-[#FBEBB5] h-screen flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8">
                {/* Content Section - Left aligned */}
                <div className="max-w-xl text-center lg:text-left ml-10">
                    <h1 className="text-4xl lg:text-7xl font-sans text-black  mb-6 lg:mb-9 lg:ml-8">
                        Rocket Single Seater
                    </h1>
                    <button className="text-black underline py-2 lg:py-3 px-6 lg:px-8 font-sans text-lg lg:text-2xl">
                        SHOP NOW
                    </button>
                </div>

                {/* Image Section - Right aligned */}
                <div className="mt-6 lg:mt-0">
                    <Image
                        src="/pg1-0.png"
                        width={800}
                        height={800}
                        alt="rocket single seater"
                        className="w-full max-w-md lg:max-w-none"
                    />
                </div>
            </main>

            {/* Second Section */}
            <section className="bg-[rgba(250,244,244,1)] py-8 px-4 lg:py-12 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-40">
                    {/* First Image Block */}
                    <div className="text-center">
                        <Image
                            src="/pg1-1.png" // Replace with your image path
                            width={200}
                            height={200}
                            alt="Side Table 1"
                            className="mx-auto w-full max-w-sm"
                        />
                        <p className="mt-1 text-lg lg:text-xl font-sans mr-60">Side Table</p>
                        <button className="mt-3 px-4 py-2 mr-60 text-black underline text-sm lg:text-base">
                            View More
                        </button>
                    </div>

                    {/* Second Image Block */}
                    <div className="text-center">
                        <Image
                            src="/pg1-2.png" // Replace with your image path
                            width={1000}
                            height={1000}
                            alt="Side Table 2"
                            className="mx-auto w-full max-w-sm"
                        />
                        <p className="mt-8 text-lg lg:text-xl mr-60 font-sans">Side Table</p>
                        <button className="mt-3 px-4 py-2 text-black underline mr-60 text-sm lg:text-base">
                            View More
                        </button>
                    </div>
                </div>
            </section>

            {/* Third Section */}
{/* Third Section */}
<section className="bg-white py-12 px-4 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-5xl font-semibold text-gray-800">Top Picks For You</h2>
        <p className="text-lg lg:text-xl text-gray-600 mt-2">
            Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
    </div>

    {/* Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topPicks.map((item, index) => (
            <div key={`top-pick-${index}`} className="flex flex-col items-center justify-between text-center">
                <Image
                    src={item.src} // Dynamic image source
                    width={item.width}
                    height={item.height}
                    alt={item.alt} // Dynamic alt text
                    className="mx-auto"
                />
                <p className="mt-4 text-lg font-medium">{item.description}</p>
                <p className="mt-1 text-xl font-semibold text-gray-700">{item.price}</p>
            </div>
        ))}
    </div>

    {/* View More Button */}
    
    <div className="text-center mt-8 text-lg">
    <Link href="/viewMore">
    <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300 hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400">
    View More
</button>

        </Link>
    </div>
    
</section>

{/* Fourth Section */}
<section className="bg-[rgba(255,249,229,1)] py-12 px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-center">
    {/* Image Section */}
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <Image
            src="/pg1-7.png" // Replace with your image path
            width={600}
            height={400}
            alt="Asgaard Sofa"
            className="rounded-lg"
        />
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-center text-center lg:text-left mt-6 lg:mt-0">
        <h3 className="text-3xl lg:text-5xl font-semibold text-gray-800">New Arrivals</h3>
        <p className="mt-4 text-2xl lg:text-3xl font-medium text-gray-700">Asgaard Sofa</p>
        <button className="mt-6 px-6 py-2 text-black border border-black font-medium text-lg lg:text-xl hover:bg-black hover:text-white transition">
            Order Now
        </button>
    </div>
</section>

{/* Fifth Section */}
<section className="bg-white py-12 px-4 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-5xl font-semibold text-gray-800">Our Blogs</h2>
        <p className="text-lg lg:text-xl text-gray-600 mt-2">
            Find a bright ideal to suit your taste with our great selection
        </p>
    </div>

    {/* Blog Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog Card */}
    {["/pg1-8.jpg", "/pg1-9.jpg", "/pg1-10.jpg"].map((imageSrc, index) => (
        <div key={`blog-card-${index}`} className="flex flex-col items-center  p-6 rounded-lg shadow-md">
            {/* Image */}
            <Image
                src={imageSrc} // Use the dynamic image path from the array
                width={300}
                height={200}
                alt={`Blog ${index + 1}`}
                className="rounded-lg"
            />

                {/* Text */}
                <p className="mt-4 text-xl font-medium text-gray-800 text-center">
                    Going all-in with millennial design
                </p>

                {/* Button */}
                <button className="mt-4 px-6 py-2 text-black border border-black font-medium text-lg hover:bg-black hover:text-white transition">
                    Read More
                </button>

                {/* Icons */}
                <div className="flex items-center mt-4 space-x-4 text-gray-600 text-sm">
                    {/* Clock Icon */}
                    <div className="flex items-center space-x-1">
                        <FiClock className="text-gray-800" />
                        <span>5 min</span>
                    </div>

                    {/* Calendar Icon */}
                    <div className="flex items-center space-x-1">
                        <IoCalendarClearOutline className="text-gray-800" />
                        <span>12th Oct 2022</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
</section>

{/* Sixth Section */}
<section 
    className="relative bg-center bg-cover bg-no-repeat py-20 flex items-center justify-center" 
    style={{ backgroundImage: "url('/pg1-11.jpg')" }} // Replace with your image file name
>
    {/* Overlay (Optional for readability) */}
    <div className="absolute inset-0 bg-white opacity-70"></div>


    {/* Content */}
    <div className="relative text-center text-black">
        <h2 className="text-4xl lg:text-6xl font-semibold mb-4">Our Instagram</h2>
        <p className="text-lg lg:text-xl mb-6">Follow our store on Instagram</p>
        <button className="px-8 py-1 bg-white text-black text-lg font-medium rounded-full shadow-lg shadow-black hover:bg-gray-200 transition">
            Follow Us
        </button>
    </div>
</section>


        </div>
    );
};

export default Hero;
