"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useCartStore from "../store/cartStore";

const Cart = () => {
  const { cartItems, removeFromCart } = useCartStore();
  const router = useRouter();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-green-900">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <p className="text-xl font-bold text-green-800">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <button
              onClick={() => router.push("/best-sale/check-out")}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-semibold"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
