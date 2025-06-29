import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const paymentMethod = localStorage.getItem("paymentMethod");
  const isPaymentSubmitted = localStorage.getItem("isPaymentSubmitted");

  if (!paymentMethod || isPaymentSubmitted !== "true") {
    return <Navigate to="/payment" replace />;
  }

  return children;
}
