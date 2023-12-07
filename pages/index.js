// pages/index.js
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Destination from "@/components/Destination";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <Destination />
      {/* The rest of your page content goes here */}
    </div>
  );
};

export default Home;
