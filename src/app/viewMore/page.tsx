import { sanityClient, urlFor } from "@/sanity/lib/sanityClient"; 
import Image from "next/image";

// Define the Product Type
type Product = {
  _id: string;
  name: string;
  image?: {
    asset: {
      _ref: string; // Ensure _ref is used for Sanity image processing
    };
  };
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
};

// Fetch Products from Sanity
async function getProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    image, // Keep image as-is to use urlFor
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category
  }`;
  return await sanityClient.fetch(query);
}

export default async function ViewMorePage() {
  const products = await getProducts();

  console.log("Fetched Products:", products); // Debugging

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
        Explore Our Exclusive Products
      </h1>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => {
          console.log("Product Data:", product);
          return (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-lg p-3 sm:p-4 hover:scale-105 transition-transform duration-300"
            >
              {product.image && product.image.asset ? (
                <Image
                  src={urlFor(product.image.asset).width(300).height(300).url()}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="rounded-lg w-full object-cover"
                />
              ) : (
                <div className="w-full h-40 sm:h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}

              <h2 className="text-lg sm:text-xl font-semibold mt-2 sm:mt-3 text-gray-700">
                {product.name}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm">{product.description}</p>
              <div className="flex justify-between items-center mt-2 sm:mt-3">
                <span className="text-md sm:text-lg font-bold text-blue-600">
                  ${product.price}
                </span>
                {product.discountPercentage > 0 && (
                  <span className="text-xs sm:text-sm text-red-500">
                    {product.discountPercentage}% Off
                  </span>
                )}
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-3 sm:mt-4 hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
