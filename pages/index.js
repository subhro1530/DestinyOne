// pages/index.js
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Destination from "../components/Destination";
import NavbarMob from "@/components/NavbarMob";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <NavbarMob />
      <HeroSection />
      <Gallery />
      <Newsletter />
    </div>
  );
};

export default Home;
