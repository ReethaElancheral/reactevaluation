import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#4caf50",
      color: "white",
    }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "#ffeb3b" : "white",
          textDecoration: "none",
          fontWeight: "700",
          fontSize: "1.3rem",
        })}
      >
        Products
      </NavLink>

      <NavLink
        to="/cart"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "1rem",
          background: "#2e7d32",
          padding: "6px 12px",
          borderRadius: "6px"
        }}
      >
        🛒 Cart ({cartCount})
      </NavLink>
    </nav>
  );
}
