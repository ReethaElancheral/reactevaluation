import React, { useState } from "react";
import ProductSummary from "../components/ProductSummary";
import AddressDetails from "../components/AddressDetails";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';
import product4 from '../assets/images/product4.jpg';
import product5 from '../assets/images/product5.jpg';
import product6 from '../assets/images/product6.jpg';



const SummaryPage = () => {
  const customerName = "Reetha Meganathan";
  const orderId = "ORD-20250628-001";

  const initialProducts = [
     {
      id: 6,
      name: "Ergonomic Mouse",
      price: 990,
      quantity: 2,
      image:product6,
    },
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1200,
      quantity: 2,
      image: product1,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2800,
      quantity: 1,
      image: product2,
    },
  
    {
      id: 4,
      name: "LED Lamp",
      price: 350,
      quantity: 4,
      image: product4,
    },
    {
      id: 5,
      name: "Portable Power Bank",
      price: 2400,
      quantity: 1,
      image: product5,
    },
   
  ];

  const [products, setProducts] = useState(initialProducts);

  const address = {
    name: customerName,
    street: "7/15, Kumari Nagar, Saravanampatti",
    city: "Coimbatore",
    pincode: "641035",
  };

  const paymentMethod = "Cash on Delivery";

  
  const handleSearch = (term) => {
    if (!term) {
      setProducts(initialProducts);
    } else {
      const filtered = initialProducts.filter((p) =>
        p.name.toLowerCase().includes(term.toLowerCase())
      );
      setProducts(filtered);
    }
  };

  const grandTotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar onSearch={handleSearch} />

      <div className="summary-wrapper">
        <div className="summary-left">
          <div className="order-info">
            <h2>Order Confirmation</h2>
            <p><strong>Order ID:</strong> {orderId}</p>
            <p><strong>Customer:</strong> {customerName}</p>
          </div>

          <div className="section">
            <h3>Shipping Address</h3>
            <AddressDetails address={address} />
          </div>

          <div className="section">
            <h3>Purchased Items</h3>
            {products.length === 0 ? (
              <p>No products found.</p>
            ) : (
              <div className="products-list">
                {products.map((item) => (
                  <ProductSummary key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="summary-right">
          <Sidebar />

          <div className="summary-box">
            <h3>Order Summary</h3>
            <p><strong>Payment Method:</strong><br />{paymentMethod}</p>
            <hr />
            <p className="grand-total-line">
              Total: <span>₹{grandTotal.toLocaleString()}</span>
            </p>
            <button className="confirm-btn">Continue Shopping</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryPage;
