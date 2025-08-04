"use client";
import React from "react";

const Featured = () => {
  const products = [
    {
      id: 1,
      name: "Khatu Shyam",
      description:
        "Celebrate the divine form of Shyam Baba with intricately crafted idols.",
      price: 499,
      originalPrice: 799,
      rating: 4.7,
      reviews: 128,
      image: "/image/4.jpg",
    },
    {
      id: 2,
      name: "Hanuman Ji",
      description:
        "Symbol of strength, devotion, and protection – handcrafted Hanuman idols for every devotee.",
      price: 459,
      originalPrice: 699,
      rating: 4.5,
      reviews: 96,
      image: "/image/3.jpg",
    },
    {
      id: 3,
      name: "Shiv Ji",
      description:
        "Channel divine energy with our serene and powerful Shiv Ji idols.",
      price: 549,
      originalPrice: 899,
      rating: 4.3,
      reviews: 87,
      image: "/image/2.jpg",
    },
    {
      id: 4,
      name: "Panchmukhi Hanuman",
      description:
        "A powerful form of devotion and protection – the five-faced Hanuman.",
      price: 599,
      originalPrice: 899,
      rating: 4.8,
      reviews: 143,
      image: "/image/1.jpg",
    },
  ];

  const openWhatsApp = (productName) => {
    const message = `Hello, I want to buy the idol of ${productName}. Please share more details.`;
    const whatsappURL = `https://wa.me/919266402179?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const openInstagram = () => {
    window.open(
      "https://www.instagram.com/plumose9?igsh=Y2Z0d3JjMzMwN3J3",
      "_blank"
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            New Latest Divine Creations
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden group">
                <div className="overflow-hidden w-full h-64 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-rose-600 text-white text-sm font-bold px-3 py-1 rounded-full z-10">
                  ₹{product.price}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#f0fdf4] to-[#ecfae5]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.round(product.rating)
                            ? "fill-current"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span className="text-gray-500 text-sm ml-2">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => openWhatsApp(product.name)}
                    className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    Buy on WhatsApp
                  </button>
                  <button
                    onClick={openInstagram}
                    className="flex-1 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
                  >
                    DM on Instagram
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
