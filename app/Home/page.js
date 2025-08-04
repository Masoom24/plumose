import BestSale from "@/components/best-sale";
import Featured from "@/components/Featured-Product";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
