import React from "react";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">🛍️ VetriMart</div>
      <div className="navbar-links">
       
        <a href="/" className="cart-link">
          <FaShoppingCart />
          Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
