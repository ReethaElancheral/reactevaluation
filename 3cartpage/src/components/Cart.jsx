import React from "react";

const Cart = ({ cart, setCart }) => {
  const updateQuantity = (id, change) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const getSubtotal = (item) => item.price * item.quantity;
  const getGrandTotal = () =>
    cart.reduce((total, item) => total + getSubtotal(item), 0);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <div className="quantity">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <p className="subtotal">Subtotal: ₹{getSubtotal(item)}</p>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="total-box">
            <h2>Grand Total: ₹{getGrandTotal()}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
