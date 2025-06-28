import React from "react";

export default function ProductList({ products }) {
  if (products.length === 0) return <p>No products found.</p>;

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <p className="category-tag">{product.category}</p>
        </div>
      ))}
    </div>
  );
}
