import React from "react";

export default function CartPage({ cartItems, setCartItems }) {
  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Your cart is empty.</h2>;
  }

  // Group items by product ID to get quantities
  const groupedItems = cartItems.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, quantity: 1 };
    } else {
      acc[item.id].quantity += 1;
    }
    return acc;
  }, {});

  const uniqueItems = Object.values(groupedItems);

  // Handler: Increase quantity (add one more instance)
  const increaseQuantity = (id) => {
    const productToAdd = cartItems.find(item => item.id === id);
    if (!productToAdd) return;
    setCartItems(prev => [...prev, productToAdd]);
  };

  // Handler: Decrease quantity (remove one instance)
  const decreaseQuantity = (id) => {
    setCartItems(prev => {
      const index = prev.findIndex(item => item.id === id);
      if (index === -1) return prev; // if not found, no change
      const newCart = [...prev];
      newCart.splice(index, 1); // remove one instance
      return newCart;
    });
  };

  // Handler: Remove all instances of a product
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>🛒 Your Cart</h2>
      {uniqueItems.map(item => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ddd",
            padding: "1rem",
            borderRadius: "10px",
            marginBottom: "1rem",
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            gap: "1.2rem",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "90px",
              height: "90px",
              objectFit: "cover",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <div style={{ flex: 1 }}>
            <h4 style={{ marginBottom: "6px", color: "#2c3e50" }}>{item.name}</h4>
            <p style={{ margin: "3px 0", fontSize: "15px" }}>Price: ₹{item.price}</p>
            <p style={{ margin: "3px 0", fontSize: "15px" }}>Category: {item.category}</p>

            <div
              style={{
                marginTop: "8px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: "600",
              }}
            >
              <button
                onClick={() => decreaseQuantity(item.id)}
                style={{
                  padding: "4px 10px",
                  fontSize: "18px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  background: "#f0f0f0",
                  cursor: "pointer",
                  userSelect: "none",
                }}
                aria-label={`Decrease quantity of ${item.name}`}
              >
                -
              </button>

              <span style={{ minWidth: "20px", textAlign: "center" }}>{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(item.id)}
                style={{
                  padding: "4px 10px",
                  fontSize: "18px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  background: "#f0f0f0",
                  cursor: "pointer",
                  userSelect: "none",
                }}
                aria-label={`Increase quantity of ${item.name}`}
              >
                +
              </button>

              <button
                onClick={() => removeItem(item.id)}
                style={{
                  marginLeft: "auto",
                  background: "#e74c3c",
                  border: "none",
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                  userSelect: "none",
                }}
                aria-label={`Remove ${item.name} from cart`}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
