import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./BusinessDetailPage.css";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import businesses from "../../data/businesses";

const BusinessDetailPage = () => {
  const { businessId } = useParams();
  const business = businesses.find(b => b.id === parseInt(businessId));
  const [category, setCategory] = useState("All");

  if (!business) {
    return <div>Business not found</div>;
  }

  return (
    <div className="business-detail-page">
      <div className="business-detail-page-top">
        <div className="business-detail-page-left">
          <h1>{business.name}</h1>
          <p>{business.description}</p>
          <p>{business.location}</p>
          <hr/>
          <ul>
            <h4>Opening Times</h4>
            <li>Monday - 08:00 - 17:00</li>
            <li>Tuesday - 08:00 - 17:00</li>
            <li>Wednesday - 08:00 - 17:00</li>
            <li>Thursday - 08:00 - 17:00</li>
            <li>Friday - 08:00 - 17:00</li>
            <li>Saturday - 08:00 - 17:00</li>
            <li>Closed</li>
          </ul> 
        </div>
        <div className="business-detail-page-right">
          <img src={business.image} alt={business.name} />
        </div>
      </div>
      <hr />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} products={business.products} />
    </div>
  );
};

export default BusinessDetailPage;