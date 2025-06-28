

import './App.css'

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import OrderTrackingPage from './components/OrderTrackingPage';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
   
    <Routes>
      <Route
        path="/"
        element={<LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />}
      />
      <Route
        path="/orders"
        element={
          isAuthenticated ? (
            <OrderTrackingPage />
          ) : (
            <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />
          )
        }
      />
    </Routes>
     </BrowserRouter>
  );
}

