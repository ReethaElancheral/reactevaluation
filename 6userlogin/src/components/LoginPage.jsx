import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // NEW
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) errors.email = "Email is required";
    else if (!emailRegex.test(email)) errors.email = "Invalid email format";
    if (!password.trim()) errors.password = "Password is required";
    return errors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setLoginError("");

    if (Object.keys(validationErrors).length === 0) {
      if (email === "nisha.reetha30@gmail.com" && password === "123456") {
        onLoginSuccess();
        navigate("/orders");
      } else {
        setLoginError("Invalid email or password");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>User Login</h2>
      <form onSubmit={handleLogin} className="login-form" noValidate>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

       <div className="password-wrapper">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <span
    className="toggle-password"
    onClick={() => setShowPassword((prev) => !prev)}
    role="button"
    tabIndex={0}
  >
    {showPassword ? "🙈" : "👁️"}
  </span>
</div>

        {errors.password && <p className="error-text">{errors.password}</p>}
        {loginError && <p className="error-text">{loginError}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
