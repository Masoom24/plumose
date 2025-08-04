"use client";
import React, { useEffect } from "react";
import useCartStore from "../../components/store/cartStore";

const History = () => {
  const { orderHistory, loadOrdersFromStorage } = useCartStore();

  useEffect(() => {
    loadOrdersFromStorage();
  }, []);

  return (
    <div
      className="min-h-screen px-4 py-8"
      style={{ backgroundColor: "#c3e6d3" }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
          Your Order History
        </h1>

        {Array.isArray(orderHistory) && orderHistory.length === 0 ? (
          <div className="text-center text-gray-600 bg-white rounded p-6 shadow">
            <p>No orders found yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orderHistory.map((order) => (
              <div
                key={order.id}
                className="bg-white shadow-md border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                {/* Order Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      Order ID: <span className="font-medium">#{order.id}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Date: <span className="font-medium">{order.date}</span>
                    </p>
                  </div>
                  <p className="mt-2 md:mt-0 font-semibold text-green-700">
                    Customer: {order.customer}
                  </p>
                </div>

                {/* Product List with Images */}
                <ul className="divide-y divide-gray-200">
                  {order.items.map((item) => (
                    <li
                      key={item.id}
                      className="py-4 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 rounded object-cover border"
                        />
                        <span className="text-gray-800">{item.name}</span>
                      </div>
                      <span className="font-medium text-gray-700">
                        ${item.price.toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Total */}
                <div className="mt-4 text-right">
                  <span className="text-lg font-bold text-green-800">
                    Total: ${order.total.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
