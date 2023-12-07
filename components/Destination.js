// components/Destination.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(null);

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

  return (
    <div>
      <h1>Destinations</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search for a destination..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Display Destination Cards */}
      {destinations.map((destination) => (
        <div key={destination.id}>
          <h2>{destination.name}</h2>
          <p>{destination.description}</p>
          {/* Add more details as needed */}
        </div>
      ))}

      {/* Display Selected Destination Details */}
      {selectedDestination && (
        <div>
          <h2>{selectedDestination.name}</h2>
          <p>{selectedDestination.description}</p>
          {/* Display more details */}
        </div>
      )}
    </div>
  );
};

export default Destination;
