import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PAYMENT_METHODS } from "../utils/constants";

export default function PaymentMethod() {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("paymentMethod");
    if (stored) setSelected(stored);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    setError("");
  };

  const getLabel = (id) => PAYMENT_METHODS.find((m) => m.id === id)?.label || "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selected) {
      setError("Please select a payment method.");
      return;
    }

    localStorage.setItem("paymentMethod", selected);
    navigate("/summary");
  };

  return (
    <section className="payment-method-container">
      <h2>Select Payment Method</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="radio-group">
          {PAYMENT_METHODS.map(({ id, label, icon }) => (
            <label key={id} className={`radio-label ${selected === id ? "active" : ""}`}>
              <input
                type="radio"
                name="payment"
                value={id}
                checked={selected === id}
                onChange={handleChange}
              />
              <span className="custom-radio" />
              <span className="radio-icon">{icon}</span>
              <span>{label}</span>
            </label>
          ))}
        </div>

        {error && <p className="error-msg">{error}</p>}

        <button type="submit" className="btn-primary">
          {selected ? `Pay with ${getLabel(selected)}` : "Choose Payment Method"}
        </button>
      </form>
    </section>
  );
}
