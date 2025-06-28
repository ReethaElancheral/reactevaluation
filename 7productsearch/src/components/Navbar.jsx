import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "flex-start",
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
    </nav>
  );
}
