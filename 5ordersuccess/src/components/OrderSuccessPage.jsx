import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchOrderConfirmation } from "../api/mockApi";

export default function OrderSuccessPage() {
  const [message, setMessage] = useState("");
  const [orderId, setOrderId] = useState("");
  const [estimatedDate, setEstimatedDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrderId = localStorage.getItem("orderId");
    const storedMessage = localStorage.getItem("orderMessage");

    if (storedOrderId && storedMessage) {
      setOrderId(storedOrderId);
      setMessage(storedMessage);
    } else {
      fetchOrderConfirmation().then((data) => {
        setOrderId(data.orderId);
        setMessage(data.message);
        localStorage.setItem("orderId", data.orderId);
        localStorage.setItem("orderMessage", data.message);
      });
    }

    const date = new Date();
    date.setDate(date.getDate() + 5);
    setEstimatedDate(date.toLocaleDateString());
  }, []);

  function handleReturnHome() {
    localStorage.removeItem("orderId");
    localStorage.removeItem("orderMessage");
    navigate("/home");
  }

  return (
    <div className="success-container">
      <h2>Order Success</h2>
      <p className="success-message">{message || "Loading..."}</p>
      {orderId && (
        <p>
          <strong>Order ID:</strong> <span className="order-id">{orderId}</span>
        </p>
      )}
      {estimatedDate && (
        <p>
          <strong>Estimated Delivery Date:</strong>{" "}
          <span className="estimated-date">{estimatedDate}</span>
        </p>
      )}
      <button className="return-home-btn" onClick={handleReturnHome}>
        Return to Homepage
      </button>
    </div>
  );
}
