

import './App.css'

import React, { useState, useEffect, useRef } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import img1 from './assets/images/img1.jpg'
import img2 from './assets/images/img2.jpg'
import img3 from './assets/images/img3.jpg'

const mockCart = [
  {
    id: 1,
    name: "Aashirvaad Atta 5kg",
    price: 260,
    quantity: 2,
    image:img1,
  },
  {
    id: 2,
    name: "Tata Salt 1kg",
    price: 28,
    quantity: 1,
    image: img2,
  },
  {
    id: 3,
    name: "Amul Butter 500g",
    price: 260,
    quantity: 1,
    image: img3,
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const hasMounted = useRef(false);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCart(parsed);
        } else {
          setCart(mockCart);
          localStorage.setItem("cart", JSON.stringify(mockCart));
        }
      } catch {
        setCart(mockCart);
        localStorage.setItem("cart", JSON.stringify(mockCart));
      }
    } else {
      setCart(mockCart);
      localStorage.setItem("cart", JSON.stringify(mockCart));
    }
    hasMounted.current = true;
  }, []);

  useEffect(() => {
    if (hasMounted.current) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <>
      <Navbar cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      <div className="app-wrapper">
        <h1>🛒 Your Cart</h1>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </>
  );
}

export default App;
