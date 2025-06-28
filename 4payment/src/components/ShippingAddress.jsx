import React from "react";

export default function ShippingAddress({ address }) {
  return (
    <section className="shipping-address">
      <h3>Shipping Address</h3>
      <p>{address.name}</p>
      <p>{address.street}</p>
      <p>
        {address.city}, {address.state} - {address.pincode}
      </p>
    </section>
  );
}
