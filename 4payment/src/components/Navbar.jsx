import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">🛍️ VetriMart</div>
      <div className="navbar-links">
        <NavLink to="/payment" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Payment Method
        </NavLink>
        <NavLink to="/summary" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Order Summary
        </NavLink>
      </div>
      <div className="cart-icon" aria-label="cart">
        🛒
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </div>
    </nav>
  );
}
