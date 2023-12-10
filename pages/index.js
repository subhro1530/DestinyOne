// pages/index.js
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Destination from "../components/Destination";
import StatusSection from "../components/StatusSection"; // Assuming you have a StatusSection component
import Status from "@/components/Status";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Destination />
      <StatusSection />
      {/* Example of using Status with a background image link */}
      <Status
        number={123}
        label="Example Status"
        bgImageLink="https://wallpapershome.com/images/pages/ico_hs/19250.jpg"
      />
    </div>
  );
};

export default Home;
