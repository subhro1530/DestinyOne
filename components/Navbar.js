// components/Navbar.js
import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Image,
  Divider,
  Link,
  chakra,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi"; //
import { BiSearch } from "react-icons/bi";
const StyledBiSearch = chakra(BiSearch);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust the threshold based on your design
      const threshold = 50;

      setIsScrolled(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      as="nav"
      position="fixed"
      width="95vw"
      p={isScrolled ? "none" : "3"}
      bgColor="transparent"
      transition="background-color 0.3s"
      zIndex={1}
      marginLeft="6rem"
      marginTop={isScrolled ? "none" : "1rem"}
      color="white"
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
          mb={4}
          display={isScrolled ? "none" : "flex"}
          transition="all ease-in-out 0.8s"
        >
          <Box flexDirection="column" width="30%" letterSpacing="0.5px">
            <Box>
              <Text fontWeight="bold" display="inline-block">
                Call us:
              </Text>{" "}
              +91 96741 77512
            </Box>
            <Box>
              <Link
                style={{ cursor: "pointer" }}
                _hover={{ color: "rgb(242,231,75)" }}
              >
                https://acns.vercel.app/
              </Link>
            </Box>
          </Box>
          <Box align="center" width="30%">
            <Image src="/hori.png" alt="Logo" width="50" height="50" />
          </Box>
          <Box width="30%" align="center">
            <StyledBiSearch
              size={30}
              _hover={{ color: "rgb(242,231,75)" }}
              style={{
                cursor: "pointer",
                zIndex: "1",
                color: "white",
              }}
            />
          </Box>
        </VStack>
        <Divider borderColor="white" opacity="0.6"></Divider>
        <Box
          display={{ base: "flex", md: "flex" }}
          align="center"
          height="10vh"
          alignItems="center"
          fontWeight="bold"
          fontFamily="Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
          fontSize={15}
          letterSpacing={1}
          bgColor={isScrolled ? "white" : "transparent"}
          color={isScrolled ? "black" : "white"}
          width={isScrolled ? "100vw" : "unset"}
          justifyContent={isScrolled ? "center" : "unset"}
        >
          <Flex>
            <Box
              mr={8}
              textShadow="1px 1px 1px black"
              style={{ cursor: "pointer" }}
              _hover={
                isScrolled
                  ? { color: "rgb(125,198,243)" }
                  : { color: "rgb(242,231,75)" }
              }
            >
              <Link style={{ textDecoration: "none" }}>HOME</Link>
            </Box>
            <Box
              mr={8}
              textShadow="1px 1px 1px black"
              style={{ cursor: "pointer" }}
              _hover={
                isScrolled
                  ? { color: "rgb(125,198,243)" }
                  : { color: "rgb(242,231,75)" }
              }
            >
              <Link style={{ textDecoration: "none" }}>PAGES</Link>
            </Box>
            <Box
              mr={8}
              textShadow="1px 1px 1px black"
              style={{ cursor: "pointer" }}
              _hover={
                isScrolled
                  ? { color: "rgb(125,198,243)" }
                  : { color: "rgb(242,231,75)" }
              }
            >
              <Link style={{ textDecoration: "none" }}>BLOG</Link>
            </Box>
            <Box
              mr={8}
              textShadow="1px 1px 1px black"
              style={{ cursor: "pointer" }}
              _hover={
                isScrolled
                  ? { color: "rgb(125,198,243)" }
                  : { color: "rgb(242,231,75)" }
              }
            >
              <Link style={{ textDecoration: "none" }}>GALLERY</Link>
            </Box>
            <Box
              mr={8}
              textShadow="1px 1px 1px black"
              style={{ cursor: "pointer" }}
              _hover={
                isScrolled
                  ? { color: "rgb(125,198,243)" }
                  : { color: "rgb(242,231,75)" }
              }
            >
              <Link style={{ textDecoration: "none" }}>ELEMENTS</Link>
            </Box>
            <Box
              mr={8}
              textShadow="1px 1px 1px black"
              style={{ cursor: "pointer" }}
              _hover={
                isScrolled
                  ? { color: "rgb(125,198,243)" }
                  : { color: "rgb(242,231,75)" }
              }
            >
              <Link style={{ textDecoration: "none" }}>CONTACTS</Link>
            </Box>
          </Flex>
        </Box>
        <Divider borderColor="white" opacity="0.6" />
        {/* Hamburger Icon for Mobile */}
        <Box display={{ base: "flex", md: "none" }}>
          <GiHamburgerMenu size={24} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
