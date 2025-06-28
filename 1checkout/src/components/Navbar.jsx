import React, { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">ShopEasy</div>
      <input
        type="search"
        placeholder="Search orders..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
    </nav>
  );
};

export default Navbar;
