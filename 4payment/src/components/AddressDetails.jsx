import React from "react";

const AddressDetails = ({ address }) => {
  return (
    <div className="address-box">
      <p><strong>{address.name}</strong></p>
      <p>{address.street}</p>
      <p>{address.city} - {address.pincode}</p>
    </div>
  );
};

export default AddressDetails;
