import React from "react";

const GardeningTools = () => {
  const tools = [
    {
      id: 1,
      imgSrc: "/Categories/shovel.jpg",
      title: "Shovel",
      price: 499.0,
      reviews: 34,
    },
    {
      id: 2,
      imgSrc: "/Categories/pruner.jpg",
      title: "Hand Pruner",
      price: 299.0,
      reviews: 48,
    },
    {
      id: 3,
      imgSrc: "/Categories/trowel.jpg",
      title: "Trowel",
      price: 199.0,
      reviews: 27,
    },
    {
      id: 4,
      imgSrc: "/Categories/garden-fork.jpg",
      title: "Garden Fork",
      price: 450.0,
      reviews: 18,
    },
    {
      id: 5,
      imgSrc: "/Categories/hoe.jpg",
      title: "Hoe",
      price: 349.0,
      reviews: 22,
    },
    {
      id: 6,
      imgSrc: "/Categories/watering-can.jpg",
      title: "Watering Can",
      price: 399.0,
      reviews: 54,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 tracking-tight mb-4">
            Gardening Tools
          </h1>
          <p className="text-green-700 max-w-2xl mx-auto text-lg">
            Explore essential tools for every gardener. From digging to
            watering, we’ve got everything you need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={tool.imgSrc}
                  alt={tool.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full z-10">
                  ₹{tool.price.toFixed(2)}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#f0fdf4] to-[#ecfae5]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  High-quality and durable gardening tool for home and
                  professional use.
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">
                      ({tool.reviews} reviews)
                    </span>
                  </div>
                  <button className="text-sm font-medium text-green-700 hover:text-green-900 transition-colors">
                    Shop Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-green-700 text-white font-medium rounded-full hover:bg-green-800 transition-colors shadow-lg hover:shadow-xl">
            View All Tools
          </button>
        </div>
      </div>
    </div>
  );
};
export default GardeningTools;
