import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BusinessPage.css";
import LocationSearch from "../../components/LocationSearch/LocationSearch";

const businesses = [
  { id: 1, name: "The Dales Feast Kitchen", location: "Selby", image: "src/assets/TheDalesFeastKichen.jpg" },
  { id: 2, name: "Yorkshire Harvest & Spice", location: "Brayton", image: "src/assets/YorkshireHarvestAndSpice.jpg" },
  { id: 3, name: "The Wensleydale Butchers", location: "Selby", image: "src/assets/WensleydaleButchers.jpg" },
  { id: 4, name: "The Green Hills Café", location: "York", image: "src/assets/TheGreenHillsCafe.jpg" },
  { id: 5, name: "Coastal Crust & Cravings", location: "York", image: "src/assets/CoastalCrustAndCravings.jpg" },
  { id: 6, name: "The Yorkshire Grains & Grill", location: "Brayton", image: "src/assets/TheYorkshireGrainsAndGrill.jpg" },
  { id: 7, name: "The Old Barn Bistro", location: "Snaith", image: "src/assets/TheOldBarnBistro.jpg" },
  { id: 8, name: "Moorside Bites Diner", location: "Barlby", image: "src/assets/MoorsideBitesDiner.jpg" },
  { id: 9, name: "Spice & Stone Market", location: "Carlton", image: "src/assets/SpiceAndStoneMarket.jpg" },
  { id: 10, name: "The Shepherd's Pantry", location: "Selby", image: "src/assets/ShepherdsPantry.jpg" },
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
        Choose from our diverse menu to help you find what you are looking for.
        We have a huge range of products on this menu so hopefully you can find
        the right one for you!
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