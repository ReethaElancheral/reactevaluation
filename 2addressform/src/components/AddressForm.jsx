import React, { useState, useEffect } from "react";

const countryCodes = [
  { code: "+91", name: "India" },
  { code: "+1", name: "USA/Canada" },
  { code: "+44", name: "UK" },
  { code: "+61", name: "Australia" },
  { code: "+81", name: "Japan" },
  { code: "+49", name: "Germany" },
  { code: "+33", name: "France" },
  { code: "+7", name: "Russia" },
  { code: "+55", name: "Brazil" },
  { code: "+27", name: "South Africa" },
  { code: "+64", name: "New Zealand" },
  { code: "+86", name: "China" },
];

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export default function AddressForm() {
  const [form, setForm] = useState({
    fullName: "",
    countryCode: "+91",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const currentUser = localStorage.getItem("currentUser");

  useEffect(() => {
    if (currentUser) {
      const savedAddress = localStorage.getItem(`address_${currentUser}`);
      if (savedAddress) {
        setForm(JSON.parse(savedAddress));
      }
    }
  }, [currentUser]);

  const validate = () => {
    let errs = {};

    if (!form.fullName.trim()) errs.fullName = "Full Name is required";

    if (!form.phone.trim()) errs.phone = "Phone Number is required";
    else if (!/^\d{10}$/.test(form.phone))
      errs.phone = "Phone Number must be exactly 10 digits";

    if (!form.street.trim()) errs.street = "Street Address is required";

    if (!form.city.trim()) errs.city = "City is required";

    if (!form.state.trim()) errs.state = "State is required";

    if (!form.pincode.trim()) errs.pincode = "Pincode is required";
    else if (!/^\d{6}$/.test(form.pincode))
      errs.pincode = "Pincode must be exactly 6 digits";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (currentUser) {
      localStorage.setItem(`address_${currentUser}`, JSON.stringify(form));
      setSuccessMsg("Shipping address saved successfully!");
    } else {
      setSuccessMsg("No user logged in. Cannot save address.");
    }
  };

  const handleReset = () => {
    setForm({
      fullName: "",
      countryCode: "+91",
      phone: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
    });
    setErrors({});
    setSuccessMsg("");
  };

  return (
    
        <form onSubmit={handleSubmit} className="address-form" noValidate>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
              autoComplete="name"
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>

          <div className="phone-row">
            <label>Phone Number</label>
            <div className="phone-input-group">
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                aria-label="Country code"
              >
                {countryCodes.map(({ code, name }) => (
                  <option key={code} value={code}>
                    {name} ({code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={handleChange}
                maxLength="10"
                autoComplete="tel"
              />
            </div>
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div>
            <label>Street Address</label>
            <input
              type="text"
              name="street"
              placeholder="123, Main Street, Apartment, etc."
              value={form.street}
              onChange={handleChange}
              autoComplete="street-address"
            />
            {errors.street && <p className="error">{errors.street}</p>}
          </div>

          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="City name"
              value={form.city}
              onChange={handleChange}
              autoComplete="address-level2"
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </div>

          <div>
            <label>State</label>
            <select
              name="state"
              value={form.state}
              onChange={handleChange}
              aria-label="State"
            >
              <option value="">Select State</option>
              {indianStates.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
            {errors.state && <p className="error">{errors.state}</p>}
          </div>

          <div>
            <label>Pincode</label>
            <input
              type="text"
              name="pincode"
              placeholder="6-digit postal code"
              value={form.pincode}
              onChange={handleChange}
              maxLength="6"
              autoComplete="postal-code"
            />
            {errors.pincode && <p className="error">{errors.pincode}</p>}
          </div>

          <div className="button-row">
            <button type="submit" className="submit-btn">
              Save Address
            </button>
            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
              aria-label="Reset form"
            >
              Reset
            </button>
          </div>

          {successMsg && (
            <div className="toast">
              <span>{successMsg}</span>
              <button
                aria-label="Close"
                onClick={() => setSuccessMsg("")}
                className="toast-close-btn"
              >
                &times;
              </button>
            </div>
          )}
        </form>
    
  );
}
