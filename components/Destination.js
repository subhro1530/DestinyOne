  // components/Destination.js
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import { Box, Button, Input, Heading, VStack, Text } from "@chakra-ui/react";
  import { FaMapMarkerAlt } from "react-icons/fa";

  const Destination = () => {
    const [destinations, setDestinations] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
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
      const result = destinations.find(
        (destination) =>
          destination.name.toLowerCase() === searchQuery.toLowerCase()
      );

      setSelectedDestination(result);
    };

    const handleGetCurrentLocation = async () => {
      try {
        const response = await axios.get(
          "https://ipinfo.io/json?token=f61520e6994656"
        );
        const { city, country, loc } = response.data;
        const [latitude, longitude] = loc.split(",");
        setCurrentLocation({ city, country, latitude, longitude });
      } catch (error) {
        console.error("Error getting current location:", error.message);
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
        <Button
          colorScheme="black"
          bg="black"
          color="white"
          leftIcon={<FaMapMarkerAlt />}
          onClick={handleGetCurrentLocation}
        >
          Get Current Location
        </Button>

        {/* Display Current Location */}
        {currentLocation && (
          <Box>
            <Heading size="md">Current Location</Heading>
            <Text>City: {currentLocation.city}</Text>
            <Text>Country: {currentLocation.country}</Text>
            <Text>Latitude: {currentLocation.latitude}</Text>
            <Text>Longitude: {currentLocation.longitude}</Text>
          </Box>
        )}

        {/* Display Destination Cards */}
        {destinations.map((destination) => (
          <Box key={destination.id} p={4} borderWidth="1px" borderRadius="lg">
            <Heading size="md">{destination.name}</Heading>
            <Text>{destination.description}</Text>
          </Box>
        ))}

        {/* Display Selected Destination Details */}
        {selectedDestination && (
          <Box p={4} borderWidth="1px" borderRadius="lg">
            <Heading size="md">{selectedDestination.name}</Heading>
            <Text>{selectedDestination.description}</Text>
          </Box>
        )}
      </VStack>
    );
  };

  export default Destination;
