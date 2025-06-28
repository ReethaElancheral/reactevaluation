import { useState } from 'react'

import './App.css'

import AddressForm from "./components/AddressForm";

export default function App() {
  return (
    <div className="app-container">
      <h1>Shipping Address Form</h1>
      <AddressForm />
    </div>
  );
}

