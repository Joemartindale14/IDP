import React from "react";
import "./LocationSearch.css";

const LocationSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="location-search">
      <input
        type="text"
        placeholder="Search by location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default LocationSearch;