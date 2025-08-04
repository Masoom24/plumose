import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import History from "@/components/order-history";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <History />
      <Footer />
    </div>
  );
};

export default page;
