"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cart, removeItemFromCart } = useCart();

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b border-gray-300 pb-4"
              >
                {/* Product Image */}
                <div className="w-1/4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-1 px-4">
                  <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                  <p className="text-gray-600">Price: Rs. {item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <button
                  className="w-full sm:w-40 hover:bg-slate-300 border border-black p-2 rounded-md mt-4 font-bold"
                  onClick={() => removeItemFromCart(item.id)}
                >
                 ❌  Delete Item
                </button>
              </li>
            ))}
          </ul>

          {/* Subtotal */}
          <div className="mt-8 text-right">
            <p className="text-xl font-semibold">Subtotal: Rs. {subtotal}</p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-blue-600">
              View Cart
            </button>
            <Link href="/checkout" passHref>
              <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
