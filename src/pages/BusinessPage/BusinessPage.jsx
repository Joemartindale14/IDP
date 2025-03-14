import React from "react";
import { useNavigate } from "react-router-dom";
import "./BusinessPage.css";

const businesses = [
  { id: 1, name: "Business 1", image: "path/to/image1.png" },
  { id: 2, name: "Business 2", image: "path/to/image2.png" },
  { id: 3, name: "Business 3", image: "path/to/image3.png" },
  { id: 4, name: "Business 4", image: "path/to/image4.png" },
  { id: 5, name: "Business 5", image: "path/to/image5.png" },
  { id: 6, name: "Business 6", image: "path/to/image6.png" },
  { id: 7, name: "Business 7", image: "path/to/image7.png" },
  { id: 8, name: "Business 8", image: "path/to/image8.png" },
  { id: 9, name: "Business 9", image: "path/to/image9.png" },
  { id: 10, name: "Business 10", image: "path/to/image10.png" },
];

const BusinessPage = () => {
  const navigate = useNavigate();

  const handleBusinessClick = (id) => {
    navigate(`/explore-menu/${id}`);
  };

  return (
    <div className="business-page">
      <h1>LOCAL BUSINESSES</h1>
      <p className="explore-menu-text">
        Choose from our diverse menu to help you find what you are looking for.
        We have a huge range of products on this menu so hopefully you can find
        the right one for you!Choose from our diverse menu to help you find what you are looking for.
        We have a huge range of products on this menu so hopefully you can find
        the right one for you!Choose from our diverse menu to help you find what you are looking for.
        We have a huge range of products on this menu so hopefully you can find
        the right one for you!
      </p>
      <hr />
      <div className="business-list">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="business-item"
            onClick={() => handleBusinessClick(business.id)}
          >
            <img src={business.image} alt={business.name} />
            <p>{business.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessPage;