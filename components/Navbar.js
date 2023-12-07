// components/Navbar.js
import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Navbar = () => {
  const animationVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav initial="hidden" animate="visible" variants={animationVariants}>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        wrap="wrap"
        p={6}
        bg="teal.500"
        color="white"
      >
        {/* Logo */}
        <Box>
          <Link href="/">
            <img src="/logo.png" alt="Logo" width="50" height="50" />
          </Link>
        </Box>

        {/* Navigation Links */}
        <Flex align="center" justify="center" flexGrow={1}>
          <Link href="/" mr={4}>
            Home
          </Link>
          <Link href="/blog" mr={4}>
            Blog
          </Link>
          <Link href="/gallery" mr={4}>
            Gallery
          </Link>
          <Link href="/contacts" mr={4}>
            Contacts
          </Link>
        </Flex>

        {/* Language Changer */}
        <Button colorScheme="teal" variant="outline">
          Change Language
        </Button>
      </Flex>
    </motion.nav>
  );
};

export default Navbar;
