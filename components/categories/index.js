"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Flower from "@/public/Flower";
import { Canvas } from "@react-three/fiber";

import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Panchmukhi Hanuman Idols",
      description:
        "A powerful form of devotion and protection – the five-faced Hanuman.",
      image: "/image/1.jpg", // Image path
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 2,
      name: "Lord Shiva Sculptures",
      description:
        "Channel devapi  energy with our serene and powerful Shiv Ji idols",
      image: "/image/2.jpg", // Image path
      color: "from-lime-500 to-green-600",
    },
    {
      id: 3,
      name: "Hanuman Ji Idols",
      description:
        "ISymbol of strength, devotion, and protection – handcrafted Hanuman idols for every devotee",
      image: "/image/3.jpg", // Image path
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: 4,
      name: "Khatu Shyam Ji Idols",
      description:
        "Celebrate the devapi form of Shyam Baba with intricately crafted idols.",
      image: "/image/4.jpg", // Image path
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 5,
      name: "Ram Darbar Collection",
      description:
        "A symbol of dharma, unity, and grace – bring home the blessings of Ram Darbar.",
      image: "/image/5.jpg", // Image path
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: { y: -10, scale: 1.03 },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#f0fdf4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4 font-serif"
          >
            Explore our handpicked collection of devapi idols and sculptures.
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8 }}
            className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-green-600 mx-auto rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg"
          >
            Explore our curated collections for all your gardening needs
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover="hover"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 blur-md group-hover:blur-lg" />

              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 z-10 h-full flex flex-col transition-all duration-300 group-hover:shadow-2xl">
                <div
                  className={`p-6 bg-gradient-to-br ${category.color} text-white`}
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6 overflow-hidden border-2 border-white/30">
                    {/* Replaced icon with image */}
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">
                    {category.name}
                  </h3>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6 text-center flex-grow">
                    {category.description}
                  </p>
                  <button className="mt-auto mx-auto px-5 py-2.5 bg-white text-gray-800 rounded-full text-sm font-semibold border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-300 group-hover:text-emerald-700 group-hover:border-emerald-200 group-hover:bg-emerald-50 flex items-center">
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16"
        ></motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
