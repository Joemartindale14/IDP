import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ExploreMenuPage from "./pages/ExploreMenuPage/ExploreMenuPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import BusinessPage from "./pages/BusinessPage/BusinessPage"; // Import BusinessPage

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} setUser={setUser} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/explore-menu" element={<ExploreMenuPage />} />
          <Route path="/explore-menu/:businessId" element={<ExploreMenuPage />} /> {/* Add route with businessId */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/account" element={<AccountPage user={user} setUser={setUser} />} />
          <Route path="/businesses" element={<BusinessPage />} /> {/* Add route for BusinessPage */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;