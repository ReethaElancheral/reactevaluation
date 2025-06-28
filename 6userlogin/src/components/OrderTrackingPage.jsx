import React from "react";
import { ORDERS } from "../data/orders";

const STATUS_STEPS = ["Processing", "Shipped", "Delivered"];

function StatusStepper({ status }) {
  const currentStep = STATUS_STEPS.indexOf(status);

  return (
    <div className="status-stepper">
      {STATUS_STEPS.map((step, idx) => (
        <div key={step} className="step-container">
          <div
            className={`step-circle ${idx <= currentStep ? "active" : ""}`}
            aria-label={`Step ${step}`}
          >
            {idx < currentStep ? "✓" : idx + 1}
          </div>
          <div className="step-label">{step}</div>
          {idx !== STATUS_STEPS.length - 1 && (
            <div
              className={`step-bar ${idx < currentStep ? "active" : ""}`}
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function OrderTrackingPage() {
  return (
    <div className="order-page">
      <h2>Your Orders</h2>
      <div className="order-list">
        {ORDERS.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <div>
                <strong>Order ID:</strong> {order.id}
              </div>
              <div>
                <strong>Date:</strong> {order.date}
              </div>
            </div>

            <StatusStepper status={order.status} />

            <div className="order-footer">
              <div>
                <strong>Items:</strong> {order.itemsCount}
              </div>
              <div>
                <strong>Total:</strong> ₹{order.totalAmount}
              </div>
              <div className={`status-badge status-${order.status.toLowerCase()}`}>
                {order.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
