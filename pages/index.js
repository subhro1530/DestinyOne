// pages/index.js
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Destination from "../components/Destination";
import NavbarMob from "@/components/NavbarMob";

const Home = () => {
  return (
    <div>
      <Navbar />
      <NavbarMob />
      <HeroSection />
      <Destination />
    </div>
  );
};

export default Home;
