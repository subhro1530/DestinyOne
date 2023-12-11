// components/Destination.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Input, Heading, VStack, Text } from "@chakra-ui/react";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Fetch destination data from your API
    const fetchDestinations = async () => {
      try {
        const response = await axios.get("your_destination_api_url");
        setDestinations(response.data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);

  const handleSearch = () => {
    // Implement search logic based on searchQuery
    const result = destinations.find(
      (destination) =>
        destination.name.toLowerCase() === searchQuery.toLowerCase()
    );

    setSelectedDestination(result);
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get the current location coordinates
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting current location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  };

  return (
    <VStack spacing={4} align="center" p={4}>
      <Heading>Destinations</Heading>

      {/* Search bar */}
      <Input
        type="text"
        placeholder="Search for a destination..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button colorScheme="teal" onClick={handleSearch}>
        Search
      </Button>

      {/* Current Location Button */}
      <Button colorScheme="blue" onClick={handleGetCurrentLocation}>
        Get Current Location
      </Button>

      {/* Display Current Location */}
      {currentLocation && (
        <Box>
          <Heading size="md">Current Location</Heading>
          <Text>Latitude: {currentLocation.latitude}</Text>
          <Text>Longitude: {currentLocation.longitude}</Text>
        </Box>
      )}

      {/* Display Destination Cards */}
      {destinations.map((destination) => (
        <Box key={destination.id} p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md">{destination.name}</Heading>
          <Text>{destination.description}</Text>
          {/* Add more details as needed */}
        </Box>
      ))}

      {/* Display Selected Destination Details */}
      {selectedDestination && (
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md">{selectedDestination.name}</Heading>
          <Text>{selectedDestination.description}</Text>
          {/* Display more details */}
        </Box>
      )}
    </VStack>
  );
};

export default Destination;
