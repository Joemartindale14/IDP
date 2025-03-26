import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BusinessPage.css";
import LocationSearch from "../../components/LocationSearch/LocationSearch";
import image1 from "../../assets/TheDalesFeastKichen.jpg";
import image2 from "../../assets/YorkshireHarvestAndSpice.jpg";
import image3 from "../../assets/WensleydaleButchers.jpg";
import image4 from "../../assets/TheGreenHillsCafe.jpg";
import image5 from "../../assets/CoastalCrustAndCravings.jpg";

const businesses = [
  { id: 1, name: "The Dales Feast Kitchen", location: "Selby", image: image1 },
  { id: 2, name: "Yorkshire Harvest & Spice", location: "Brayton", image: image2 },
  { id: 3, name: "The Wensleydale Butchers", location: "Selby", image: image3 },
  { id: 4, name: "The Green Hills Café", location: "Barlby", image: image4 },
  { id: 5, name: "Coastal Crust & Cravings", location: "York", image: image5 },
];

const BusinessPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleBusinessClick = (id) => {
    navigate(`/business/${id}`);
  };

  const filteredBusinesses = businesses.filter((business) =>
    business.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="business-page">
      <h1>LOCAL BUSINESSES</h1>
      <p className="explore-menu-text">
        Explore a variety of local businesses on our Search Business page! Simply browse through the list of available businesses, click on each one to view their offerings, and discover unique products you can order for collection. Whether you're looking for fresh food, handcrafted items, or specialty goods, Local Foods makes it easy to connect with your community’s best shops.
      </p>
      <hr />
      <LocationSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="business-list">
        {filteredBusinesses.map((business) => (
          <div
            key={business.id}
            className="business-item"
            onClick={() => handleBusinessClick(business.id)}
          >
            <img src={business.image} alt={business.name} />
            <h2>{business.name}</h2>
            <p>{business.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessPage;