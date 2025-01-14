import React, { useState } from "react";

const App = () => {
  const [address, setAddress] = useState("");
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  const fetchGeocodingData = async () => {
    const apiKey = "AIzaSyDl3jrtEEzDeKI_szIjlMjiNxoChZ7-DCU"; // Replace with your actual API key
    const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;

    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setLocationData(data);
      setError(null); // Clear previous errors
    } catch (err) {
      setError(err.message);
      setLocationData(null); // Clear previous data
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGeocodingData();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Google Geocoding API in React</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter an address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ padding: "10px", width: "300px" }}
        />
        <button type="submit" style={{ padding: "10px 20px", marginLeft: "10px" }}>
          Fetch Location
        </button>
      </form>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {locationData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Location Data:</h2>
          <pre style={{ backgroundColor: "#f4f4f4", padding: "10px" }}>
            {JSON.stringify(locationData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default App;