// components/NavbarMob.js
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
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { BiSearch, BiMenu, BiDotsVerticalRounded, BiX } from "react-icons/bi";
const StyledBiSearch = chakra(BiSearch);
const StyledBiMenu = chakra(BiMenu);
const StyledBiX = chakra(BiX);
const StyledBiDotsVerticalRounded = chakra(BiDotsVerticalRounded);

const NavbarMob = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    isOpen: mainDrawerIsOpen,
    onOpen: onMainDrawerOpen,
    onClose: onMainDrawerClose,
  } = useDisclosure();
  const {
    isOpen: callUsDrawerIsOpen,
    onOpen: onCallUsDrawerOpen,
    onClose: onCallUsDrawerClose,
  } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 50;
      setIsScrolled(scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      as="nav"
      position="fixed"
      width="100%"
      p={isScrolled ? "1" : "3"}
      bgColor={isScrolled ? "white" : "transparent"}
      transition="background-color 0.3s"
      zIndex={1}
      marginTop={isScrolled ? "none" : "0.5rem"}
      color={isScrolled ? "black" : "white"}
      display={{ base: "block", md: "none" }}
    >
      <Flex
        align="center"
        flexDirection="row"
        width="100%"
        justifyContent="space-between"
      >
        {/* Hamburger icon for navigation */}
        <IconButton
          icon={
            mainDrawerIsOpen ? (
              <StyledBiX size={30} />
            ) : (
              <StyledBiMenu size={30} />
            )
          }
          onClick={onMainDrawerOpen}
          variant="ghost"
          color={isScrolled ? "black" : "white"}
          display={isScrolled ? "flex" : "none"}
          transition="transform 0.3s"
          transform={mainDrawerIsOpen ? "rotate(-90deg)" : "none"}
        />

        {/* Logo */}
        <Box align="center">
          <Image src="/hori.png" alt="Logo" width="50" height="50" />
        </Box>

        <Flex align="center" flexDirection="row" justifyContent="space-between">
          {/* Search icon */}
          <Box align="center">
            <StyledBiSearch
              size={30}
              _hover={{ color: "rgb(242,231,75)" }}
              style={{
                cursor: "pointer",
                zIndex: "1",
              }}
              color={isScrolled ? "black" : "white"}
              marginLeft={3}
            />
          </Box>

          {/* Three dots menu icon */}
          <IconButton
            icon={
              callUsDrawerIsOpen ? (
                <StyledBiDotsVerticalRounded size={20} />
              ) : (
                <StyledBiDotsVerticalRounded size={30} />
              )
            }
            variant="ghost"
            color={isScrolled ? "black" : "white"}
            display={isScrolled ? "flex" : "none"}
            onClick={onCallUsDrawerOpen} // Open the Call Us drawer on three dots menu icon click
            transition="all 0.4s ease-in-out"
            transform={callUsDrawerIsOpen ? "rotate(-180deg)" : "none"}
          />
        </Flex>
        {/* Main Drawer for navigation links */}
        <Drawer
          isOpen={mainDrawerIsOpen}
          placement="left" // Adjust the placement to top
          onClose={onMainDrawerClose}
        >
          <DrawerContent style={{ marginTop: "4.5rem" }}>
            <DrawerHeader textDecoration="underline">DestinyOne</DrawerHeader>
            <DrawerBody style={{ paddingLeft: "0", paddingRight: "0" }}>
              {/* Your navigation links go here */}
              <Flex flexDirection="column" align="center">
                <Link
                  _hover={{ bgColor: "cyan", color: "white" }}
                  width="100%"
                  height={10}
                  paddingLeft={8}
                  display="flex"
                  alignItems="center"
                  transition="all 0.3s ease-in-out"
                  cursor="pointer"
                  textDecoration="none"
                >
                  HOME
                </Link>
                <Link
                  _hover={{ bgColor: "cyan", color: "white" }}
                  width="100%"
                  height={10}
                  paddingLeft={8}
                  display="flex"
                  alignItems="center"
                  transition="all 0.3s ease-in-out"
                  cursor="pointer"
                  textDecoration="none"
                >
                  PAGES
                </Link>
                <Link
                  _hover={{ bgColor: "cyan", color: "white" }}
                  width="100%"
                  height={10}
                  paddingLeft={8}
                  display="flex"
                  alignItems="center"
                  transition="all 0.3s ease-in-out"
                  cursor="pointer"
                  textDecoration="none"
                >
                  BLOG
                </Link>
                <Link
                  _hover={{ bgColor: "cyan", color: "white" }}
                  width="100%"
                  height={10}
                  paddingLeft={8}
                  display="flex"
                  alignItems="center"
                  transition="all 0.3s ease-in-out"
                  cursor="pointer"
                  textDecoration="none"
                >
                  GALLERY
                </Link>
                <Link
                  _hover={{ bgColor: "cyan", color: "white" }}
                  width="100%"
                  height={10}
                  paddingLeft={8}
                  display="flex"
                  alignItems="center"
                  transition="all 0.3s ease-in-out"
                  cursor="pointer"
                  textDecoration="none"
                >
                  ELEMENTS
                </Link>
                <Link
                  _hover={{ bgColor: "cyan", color: "white" }}
                  width="100%"
                  height={10}
                  paddingLeft={8}
                  display="flex"
                  alignItems="center"
                  transition="all 0.3s ease-in-out"
                  cursor="pointer"
                  textDecoration="none"
                >
                  CONTACTS
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Drawer for "Call us" and "Website address" */}
        <Drawer
          isOpen={callUsDrawerIsOpen}
          placement="right" // Adjust the placement to top
          onClose={onCallUsDrawerClose}
        >
          <DrawerContent style={{ marginTop: "4.5rem", height: "45vh" }}>
            <DrawerHeader textDecoration="underline">
              Contact Information
            </DrawerHeader>
            <DrawerBody>
              <Box mb={2}>
                <Text fontWeight="bold">
                  <Text color="cyan" display="inline-block">
                    Call us:
                  </Text>{" "}
                  +91 96741 77512
                </Text>
              </Box>
              <Box mb={2}>
                <Link
                  style={{ textDecoration: "none" }}
                  _hover={{ color: "rgb(242,231,75)" }}
                >
                  https://acns.vercel.app/
                </Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Divider
        borderColor={isScrolled ? "black" : "white"}
        opacity="0.6"
        margin="0.5rem 0"
      ></Divider>
    </Box>
  );
};

export default NavbarMob;
