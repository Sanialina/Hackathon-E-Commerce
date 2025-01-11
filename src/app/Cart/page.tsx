"use client"
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
    const { cart } = useCart();
  
    return (
      <div className="px-4 md:px-8 lg:px-16 py-8">
        <h1 className="text-3xl font-bold mb-4">Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
                {/* Product Image */}
              <div className="w-1/4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>Price: Rs. {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  

