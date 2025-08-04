"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi"; // hamburger icon
import Cart from "../card";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="bg-white w-full shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/logo1.png"
            alt="Logo"
            className="h-16 object-contain"
          />
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>

        {/* Desktop Nav links */}
        <div className="hidden lg:flex items-center space-x-8">
          {[
            { path: "/", label: "Home" },
            { path: "/categories", label: "Categories" },
            { path: "/best-sale", label: "Best Sale" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className="bg-[#F08080] text-black px-5 py-2 rounded-full font-semibold shadow-md hover:bg-[#ef7575]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Cart icon */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowCart(true)}
            className="p-2 rounded-full hover:bg-[#A0C88B] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3">
            {[
              { path: "/", label: "Home" },
              { path: "/categories", label: "Categories" },
              { path: "/best-sale", label: "Best Sale" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.path}
                  className="block bg-[#F08080] text-black px-5 py-2 rounded-full font-semibold text-center shadow-md hover:bg-[#ef7575]"
                  onClick={() => setIsMenuOpen(false)} // close after click
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Full-screen Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[999] flex justify-center items-center">
          <div className="bg-white w-[90%] h-[90%] p-6 rounded-lg overflow-y-auto relative">
            <button
              onClick={() => setShowCart(false)}
              className="absolute top-4 right-4 text-xl font-bold text-gray-700 hover:text-red-600"
            >
              <RxCross2 />
            </button>
            <Cart />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
