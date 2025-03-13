import React from "react";
import Header from "../../components/Header/Header";
import OrderSteps from "../../components/OrderSteps/OrderSteps";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <hr />
      <OrderSteps />
      <hr />
    </div>
  );
};

export default Home;
