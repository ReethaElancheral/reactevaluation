import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductSearchFilter from "./components/ProductSearchFilter";
import CartPage from "./components/CartPage";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product]);
    setToastMessage(`Added "${product.name}" to cart!`);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(""), 2500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartItems.length} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<ProductSearchFilter onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </main>

      {/* Toast */}
      {toastMessage && (
        <div style={toastStyle}>
          {toastMessage}
          <button
            onClick={() => setToastMessage("")}
            style={toastCloseBtnStyle}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      )}
    </BrowserRouter>
  );
}

const toastStyle = {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  backgroundColor: "#27ae60",
  color: "white",
  padding: "16px 24px",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(39, 174, 96, 0.4)",
  fontWeight: "700",
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  gap: "15px",
  zIndex: 9999,
};

const toastCloseBtnStyle = {
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: "22px",
  cursor: "pointer",
  fontWeight: "700",
  lineHeight: 1,
};
