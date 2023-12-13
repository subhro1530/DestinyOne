// components/ContactPage.js
import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  Text,
  useToast,
  VStack,
  HStack
} from "@chakra-ui/react";
import emailjs from "emailjs-com";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const toast = useToast();

  const sendEmail = async (e) => {
    e.preventDefault();

    const user_email = e.target.email.value;

    // Replace these values with your own EmailJS template and user ID
    const templateParams = {
      to_email: "shaswata.ssaha@gmail.com",
      from_email: user_email,
      message: e.target.message.value,
    };
    const autoReplyParams = {
      from_email: user_email, // User's email address
    };

    try {
      // Send email to your email address
      await emailjs.send(
        "service_oh3ka5q",
        "template_p905fwh",
        templateParams,
        "RNQHtfOcSdqCSJOxx"
      );

      // Send auto-reply to the user
      await emailjs.send(
        "service_oh3ka5q",
        "template_p905fwh",
        autoReplyParams,
        "RNQHtfOcSdqCSJOxx"
      );

      // Show success toast
      toast({
        title: "Email sent successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      e.target.reset();
      // You can add additional logic here, such as clearing the form
    } catch (error) {
      // Show error toast
      toast({
        title: "Error sending email",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error sending email:", error);
    }
  };

  return (
    <Box
      bgImage="url('https://wallpapercave.com/wp/wp9218792.jpg')"
      color="white"
      bgPosition="center"
      background="cover"
      p={8}
      mx="auto"
      zIndex={-5}
      maxW="100vw"
      backgroundSize="cover"
      id="Contact"
    >
      <Heading
        as="h1"
        mt={20}
        fontSize={{ base: "1xl", md: "1xl" }}
        mb={4}
        color="gray.200"
        fontWeight={200}
        letterSpacing={1}
      >
        <Box mb={105} fontSize={60} color="white">
          Subscribe to our Newsletter
        </Box>
      </Heading>

      <form onSubmit={sendEmail}>
        <Box mb={4}>
          <label htmlFor="email" color="gray.400">
            Email (To get in touch kindly provide your email for our
            convenience)
          </label>
          <Input type="email" name="email" required />
        </Box>

        <Box mb={4}>
          <label htmlFor="message" color="gray.400">
            Message (Please include your email/contact details here to get in
            touch with)
          </label>
          <Textarea name="message" required />
        </Box>

        <Button type="submit" mb={20} colorScheme="cyan">
          Send
        </Button>
      </form>
      <HStack
        display={{ base: "flex", md: "flex" }}
        flexDirection={{ base: "column", md: "row" }}
        width="100%"
        align="center"
        justify="space-around"
      >
        <VStack align="center" ml={{ base: "0", md: "80px" }}>
          <Heading
            as="h1"
            mt={20}
            fontSize="1xl"
            mb={4}
            color="gray.200"
            fontWeight={200}
            letterSpacing={1}
          >
            <Box mb={2}>/EMAIL</Box>
          </Heading>
          <Link
            _hover={{ color: "cyan" }}
            transition="0.2s ease-in-out"
            href="mailto:shaswata.ssaha@gmail.com"
          >
            shaswata.ssaha@gmail.com
          </Link>
        </VStack>
        <VStack align="center" ml={{ base: "0", md: "80px" }}>
          <Heading
            as="h1"
            mt={20}
            fontSize="1xl"
            mb={4}
            color="gray.200"
            fontWeight={200}
            letterSpacing={1}
          >
            <Box mb={2}>/CONTACT</Box>
          </Heading>
          <Text>+91 9674-1775-12</Text>
        </VStack>
        <VStack align="center" ml={{ base: "0", md: "80px" }}>
          <Heading
            as="h1"
            mt={20}
            fontSize="1xl"
            mb={4}
            color="gray.200"
            fontWeight={200}
            letterSpacing={1}
          >
            <Box mb={2}>/LINKEDIN</Box>
          </Heading>
          <Link
            _hover={{ color: "cyan" }}
            transition="0.2s ease-in-out"
            href="https://www.linkedin.com/in/shaswata-saha-74b209251/"
          >
            shaswata-saha-74b209251
          </Link>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Contact;
