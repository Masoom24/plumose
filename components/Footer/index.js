import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      className="footer sm:footer-horizontal  p-10"
      style={{
        backgroundImage: "url('/images/footer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className=" px-6 py-4  md:justify-between md:items-center">
        {/* Logo */}
        <div className="flex items-center gap-4 mt-0">
          <img
            src="/images/logo1.png"
            alt="Logo"
            className="w-56 h-40  object-contain"
          />
        </div>

        {/* Contact Info */}
        <ul className=" md:items-center gap-4 text-sm text-black">
          <li className="flex items-center gap-2">
            <FaLocationDot className="text-black" />
            Damdama Road, Near Om sweets Sohna, Gurgaon, Haryana 122103
          </li>
          <li className="flex items-center gap-2">
            <IoMdMail className="text-black" />
            damdama_road.ggr@fr.dtdc.com
          </li>
          <li className="flex items-center gap-2">
            <IoMdCall className="text-black" />
            +91 9266402179
          </li>
        </ul>
        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-4 mt-4 md:mt-0 text-xl text-black">
          <a href="/" className="hover:text-blue-500">
            <FiTwitter />
          </a>
          <a href="/" className="hover:text-blue-700">
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/plumose9?igsh=Y2Z0d3JjMzMwN3J3"
            className="hover:text-pink-500"
          >
            <IoLogoInstagram />
          </a>
          <a href="/" className="hover:text-blue-800">
            <FaFacebook />
          </a>
        </div>
      </nav>

      <nav>
        <h6 className=" text-black font-bold text-2xl">Categories</h6>
        <a className="link link-hover text-black">Best Plant</a>
      </nav>

      <nav>
        <h6 className="text-2xl font-bold text-black">Further Info</h6>
        <a className="link link-hover text-black">About us</a>
        <a className="link link-hover text-black">Contact</a>
      </nav>

      {/* <form>
        <h6 className=" text-2xl font-bold text-black">Newsletter</h6>
        <fieldset className="w-80">
          <label className=" text-black">Enter your email address</label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input bg-white text-gray-700 join-item"
            />
            <button className="btn border-bg-[#6ee935] bg-[#6ee935] join-item">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form> */}
    </footer>
  );
};

export default Footer;
