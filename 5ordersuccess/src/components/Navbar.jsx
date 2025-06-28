import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#4caf50",
      color: "white",
    }}>
      <div>🛍️ EasyBuy</div>
      <div>
      
        <NavLink
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "#ffeb3b" : "white",
            textDecoration: "none",
             marginRight: "1.5rem", 
          })}
        >
          Home
        </NavLink>

          <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#ffeb3b" : "white",
            marginRight: "1rem",
            textDecoration: "none",
          })}
        >
          Order Success
        </NavLink>
      </div>
    </nav>
  );
}
