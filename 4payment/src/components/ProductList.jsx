import React from "react";

export default function ProductList({ cart }) {
  return (
    <div className="product-list">
      <h3>Products Purchased</h3>
      {cart.length === 0 ? (
        <p>No products in your cart.</p>
      ) : (
        <ul>
          {cart.map(({ id, name, price, quantity, image }) => (
            <li key={id} className="product-item">
              <img src={image} alt={name} />
              <div className="product-info">
                <p className="product-name">{name}</p>
                <p>Qty: {quantity}</p>
                <p>Price: ₹{price}</p>
                <p>Total: ₹{price * quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
