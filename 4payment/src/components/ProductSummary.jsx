import React from "react";

const ProductSummary = ({ item }) => {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} className="product-image" />
      <div className="product-details">
        <h3>{item.name}</h3>
        <p>Price: ₹{item.price}</p>
        <p>Qty: {item.quantity}</p>
        <p>Total: ₹{item.price * item.quantity}</p>

        <div className="product-buttons">
          <button className="btn buy-again">Buy It Again</button>
          <button className="btn view-item">View Your Item</button>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
