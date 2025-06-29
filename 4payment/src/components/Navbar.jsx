import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleStorageChange = () => {
      setPaymentMethod(localStorage.getItem("paymentMethod"));
    };

    window.addEventListener("storage", handleStorageChange);
    handleStorageChange();

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

 
  const isOnPaymentPage = location.pathname === "/payment" || location.pathname === "/";

  return (
    <nav className="navbar">
      <div className="navbar-brand">🛍️ VetriMart</div>
      <div className="navbar-links">
        {isOnPaymentPage ? (
          <NavLink
            to="/payment"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Payment Method
          </NavLink>
        ) : paymentMethod ? (
          <NavLink
            to="/summary"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Order Summary
          </NavLink>
        ) : (
          
          <NavLink
            to="/payment"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Payment Method
          </NavLink>
        )}
      </div>
    </nav>
  );
}
