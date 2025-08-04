import Featured from "@/components/Featured-Product";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Featured />
      <Footer />
    </>
  );
}
