"use client";
import React, { useState } from "react";

const BestSale = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount * 83); // USD to INR

  const products = [
    {
      id: 1,
      name: "Khatu Shyam ",
      description:
        "Celebrate the devapi  form of Shyam Baba with intricately crafted idols.",
      price: 45.99,
      originalPrice: 79.99,
      rating: 4.7,
      reviews: 128,
      image: "/image/4.jpg",
      discount: 42,
    },
    {
      id: 2,
      name: "Hanuman Ji ",
      description:
        "ISymbol of strength, devotion, and protection – handcrafted Hanuman idols for every devotee",
      price: 32.5,
      originalPrice: 55.0,
      rating: 4.5,
      reviews: 96,
      image: "/image/3.jpg",
      discount: 41,
    },
    {
      id: 3,
      name: "shiv ji ",
      description:
        "Channel devapi  energy with our serene and powerful Shiv Ji idols",
      price: 64.99,
      originalPrice: 89.99,
      rating: 4.3,
      reviews: 87,
      image: "/image/2.jpg",
      discount: 28,
    },
    {
      id: 4,
      name: "Panchmukhi Hanuman ",
      description:
        "A powerful form of devotion and protection – the five-faced Hanuman.",
      price: 28.75,
      originalPrice: 42.99,
      rating: 4.8,
      reviews: 143,
      discount: 33,
      image: "/image/1.jpg",
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars || (i === fullStars + 1 && hasHalfStar)) {
        stars.push(<span key={i}>⭐</span>);
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ⭐
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-gradient-to-b from-[#e6f7dc] to-[#DDF6D2] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Hot Picks from the devapi Store{" "}
            <span className="text-amber-600">– Up to 50% Off!</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="relative">
                <div className="absolute top-4 left-4 bg-amber-500 text-white font-bold text-sm px-3 py-1 rounded-full z-10">
                  {product.discount}% OFF
                </div>
                <div className="h-60 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between mb-3">
                  <h2 className="text-xl font-bold text-green-900">
                    {product.name}
                  </h2>
                  <div className="text-right">
                    <p className="text-lg font-bold text-emerald-700">
                      {formatINR(product.price)}
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                      {formatINR(product.originalPrice)}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {product.description}
                </p>

                <div className="flex justify-between text-sm text-gray-500 mb-5">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                  <span>({product.reviews} reviews)</span>
                </div>

                <button
                  onClick={() => openModal(product)}
                  className="w-full bg-amber-500 text-white py-2.5 rounded-lg hover:bg-amber-600 transition"
                >
                  Quick View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative shadow-xl overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
              >
                &times;
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-green-800 mb-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-2">
                    {selectedProduct.description}
                  </p>
                  <div className="text-lg font-bold text-emerald-700 mb-2">
                    {formatINR(selectedProduct.price)}
                    <span className="text-sm text-gray-400 line-through ml-2">
                      {formatINR(selectedProduct.originalPrice)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>Rating:</strong> {selectedProduct.rating.toFixed(1)}{" "}
                    ⭐
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    <strong>Reviews:</strong> {selectedProduct.reviews}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/919266402179?text=Hi, I'm interested in buying *${selectedProduct.name}* from your store.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition text-center"
                    >
                      Buy via WhatsApp
                    </a>
                    <a
                      href="https://www.instagram.com/plumose9?igsh=Y2Z0d3JjMzMwN3J3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 text-white px-5 py-2 rounded hover:bg-pink-600 transition text-center"
                    >
                      Buy via Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSale;
