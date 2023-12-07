// pages/index.js
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
// pages/index.js
import { ChakraProvider, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <ChakraProvider>
      <Navbar />
      {/* Your Hero section goes here */}
      <Box h="100vh" bgColor="pink">
        {/* Your hero content goes here */}
      </Box>
      <Box h="100vh" bgColor="green">
        {/* Your hero content goes here */}
      </Box>
      <Box h="100vh" bgColor="skyblue">
        {/* Your hero content goes here */}
      </Box>
      {/* The rest of your page content goes here */}
    </ChakraProvider>
  );
};

export default Home;
