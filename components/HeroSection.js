// components/HeroSection.js
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const imageUrls = [
  "https://source.unsplash.com/1600x900/?travel",
  "https://source.unsplash.com/1600x900/?vacation",
  "https://source.unsplash.com/1600x900/?explore",
  "https://source.unsplash.com/1600x900/?adventure",
  "https://source.unsplash.com/1600x900/?wanderlust",
];

const slides = [
  {
    heading: "Discover Your Destination",
    text: "Uncover the beauty and wonders of your chosen destination with Destiny One. Plan your journey and make lasting memories.",
    buttonLabel: "Explore Now",
    buttonLink: "/discover",
  },
  {
    heading: "Local Gems & Hidden Treasures",
    text: "Dive deep into the heart of your destination. Explore local gems and hidden treasures recommended by seasoned travelers.",
    buttonLabel: "Discover More",
    buttonLink: "/local-gems",
  },
  {
    heading: "Don’t Miss These Experiences",
    text: "Make your trip unforgettable. Discover must-try experiences and activities that you won’t want to miss while you’re there.",
    buttonLabel: "Plan Your Adventure",
    buttonLink: "/plan-adventure",
  },
  {
    heading: "Cultural Delights & Cuisine",
    text: "Immerse yourself in the culture and indulge in the local cuisine. Explore the flavors that define your destination.",
    buttonLabel: "Savor the Experience",
    buttonLink: "/cultural-cuisine",
  },
  {
    heading: "Adventure Awaits",
    text: "Seek thrills and embark on exciting adventures. From hiking trails to water activities, find your adrenaline rush.",
    buttonLabel: "Start Your Journey",
    buttonLink: "/adventure-awaits",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box position="relative" height="90vh" overflow="hidden">
      {slides.map((slide, index) => (
        <Box
          key={index}
          position="absolute"
          top="0"
          left={`${index - currentSlide}00%`}
          width="100%"
          height="100%"
          backgroundImage={`url(${imageUrls[index]})`}
          backgroundSize="cover"
          backgroundPosition="center"
          transition="left 0.5s ease-in-out"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          padding="80px"
        >
          <Heading
            as="h2"
            fontSize={["3xl", "4xl", "5xl"]}
            mb={4}
            color="white"
          >
            {slide.heading}
          </Heading>
          <Text
            fontSize={["lg", "xl", "2xl"]}
            mb={4}
            w={["80%", "60%", "40%"]}
            color="white"
          >
            {slide.text}
          </Text>
          <ChakraLink href={slide.buttonLink}>
            <Button colorScheme="teal" size="md">
              {slide.buttonLabel}
            </Button>
          </ChakraLink>
        </Box>
      ))}
      <Button
        onClick={prevSlide}
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
      >
        <FiChevronLeft />
      </Button>
      <Button
        onClick={nextSlide}
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
      >
        <FiChevronRight />
      </Button>
    </Box>
  );
};

export default HeroSection;
