// components/Navbar.js
import { Box, Flex, Spacer, VStack, Image } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi"; //
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      width="100vw"
      p={4}
      bgColor="transparent"
      transition="background-color 0.3s"
      zIndex={1}
    >
      <Flex align="center" flexDirection="column" width="100%">
        <VStack
          spacing={4}
          align="center"
          flex="1"
          flexDirection="row"
          width="100%"
          alignItems="center"
          justifyContent="center"
          gap="25rem"
        >
          <Box flexDirection="column" width="33.33%">
            <Box>Call us: +919674177512</Box>
            <Box>shaswata.ssaha@gmail.com</Box>
          </Box>
          <Box align="center" width="33.33%">
            <Image
              src="https://tradecorp.es/wp-content/uploads/2023/05/destiny-one.jpg"
              alt="Logo"
              width="50"
              height="50"
            />
          </Box>
          <Box width="33.33%">
            <BiSearch size={24} />
          </Box>
        </VStack>

        {/* Spacer */}
        <Spacer />

        {/* Second Section */}
        <Box display={{ base: "none", md: "flex" }} align="center">
          {/* Navigation Links */}
          <Flex>
            <Box mr={4}>Work</Box>
            <Box mr={4}>Pages</Box>
            <Box mr={4}>Blog</Box>
            <Box mr={4}>Gallery</Box>
            <Box mr={4}>Elements</Box>
            <Box>Contact</Box>
          </Flex>
        </Box>

        {/* Hamburger Icon for Mobile */}
        <Box display={{ base: "flex", md: "none" }}>
          <GiHamburgerMenu size={24} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
