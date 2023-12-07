// components/Navbar.js
import { Box, Flex, Spacer, VStack, Image, Divider } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi"; //
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      width="90vw"
      p={4}
      bgColor="transparent"
      transition="background-color 0.3s"
      zIndex={1}
      marginLeft="8rem"
      marginTop="2rem"
    >
      <Flex align="center" flexDirection="column" width="90%">
        <VStack
          spacing={4}
          align="center"
          flex="1"
          flexDirection="row"
          width="100%"
          alignItems="center"
          justifyContent="center"
          gap="20%"
        >
          <Box flexDirection="column" width="30%">
            <Box>Call us: +919674177512</Box>
            <Box>shaswata.ssaha@gmail.com</Box>
          </Box>
          <Box align="center" width="30%">
            <Image
              src="https://tradecorp.es/wp-content/uploads/2023/05/destiny-one.jpg"
              alt="Logo"
              width="50"
              height="50"
            />
          </Box>
          <Box width="30%" align="center">
            <BiSearch size={24} />
          </Box>
        </VStack>
        <Divider borderColor="black" borderWidth="0.5px"></Divider>
        <Box
          display={{ base: "flex", md: "flex" }}
          align="center"
          height="15vh"
          alignItems="center"
        >
          <Flex>
            <Box mr={4}>Home</Box>
            <Box mr={4}>Pages</Box>
            <Box mr={4}>Blog</Box>
            <Box mr={4}>Gallery</Box>
            <Box mr={4}>Elements</Box>
            <Box>Contact</Box>
          </Flex>
        </Box>
        <Divider borderColor="black" borderWidth="0.5px" />
        {/* Hamburger Icon for Mobile */}
        <Box display={{ base: "flex", md: "none" }}>
          <GiHamburgerMenu size={24} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
