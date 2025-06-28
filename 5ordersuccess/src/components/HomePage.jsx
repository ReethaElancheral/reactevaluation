import React from "react";
import { PRODUCTS } from "../utils/constants";

export default function HomePage({ addToCart }) {
  return (
    <div>
      <h2>Welcome to Easybuy</h2>
      <div className="product-grid">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            {addToCart && (
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
