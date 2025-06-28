
import './App.css'

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PaymentMethod from "./components/PaymentMethod";
import SummaryPage from "./components/Summarypage";
import { MOCK_CART } from "./utils/constants";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart && storedCart.length > 0) {
      setCartCount(storedCart.reduce((acc, item) => acc + item.quantity, 0));
    } else {
      
      localStorage.setItem("cart", JSON.stringify(MOCK_CART));
      setCartCount(MOCK_CART.reduce((acc, item) => acc + item.quantity, 0));
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <main className="app-wrapper">
        <Routes>
          <Route path="/" element={<PaymentMethod />} />
          <Route path="/payment" element={<PaymentMethod />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="*" element={<PaymentMethod />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
