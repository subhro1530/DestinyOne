// Gallery.js
import React, { useEffect, useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageObjects = [
          {
            url: "https://source.unsplash.com/1600x900/?travel,landscape",
            description: "Explore the breathtaking landscapes.",
          },
          {
            url: "https://source.unsplash.com/1600x900/?travel",
            description: "Discover new horizons and cultures.",
          },
          {
            url: "https://source.unsplash.com/1600x900/?travel,city",
            description: "Immerse yourself in the vibrant city life.",
          },
          {
            url: "https://source.unsplash.com/1600x900/?travel,nature",
            description: "Connect with nature in serene environments.",
          },
          {
            url: "https://source.unsplash.com/1600x900/?travel,beach",
            description: "Relax on beautiful sandy beaches.",
          },
          {
            url: "https://source.unsplash.com/1600x900/?travel,mountains",
            description: "Conquer towering mountain peaks.",
          },
          // Add more image objects with URLs and descriptions as needed
        ];

        setImages(imageObjects);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <Box as="h1" textAlign="center" p={5} fontSize={50} fontWeight={200}>
        Gallery
      </Box>
      <Box display="flex" justifyContent="space-around" flexWrap="wrap">
        {images.map((image, index) => (
          <Box
            key={index}
            overflow="hidden"
            position="relative"
            width={{ base: "80%", sm: "45%", md: "30%" }}
            height="300px"
            mt="10px"
            mb="40px"
            cursor="pointer"
            transition="0.4s ease-in transform"
            _hover={{
              img: { transform: "scale(1.2)" },
              ".overlay": { opacity: 1 },
            }}
          >
            <Image
              src={image.url}
              alt={`Image ${index + 1}`}
              objectFit="cover"
              width="100%"
              height="100%"
            />

            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bg="rgba(0, 0, 0, 0.5)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              opacity="0"
              transition="opacity 0.5s ease"
              className="overlay"
            >
              <Text
                color="white"
                fontSize="16px"
                fontWeight={200}
                padding={5}
                textAlign="center"
              >
                {image.description || `Image ${index + 1}`}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Gallery;
