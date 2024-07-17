import React, { useState } from "react";
import "./IdVerification.css";
import Navbar from "../Navbar/Navbar";

const IdVerification = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    walletAddress: "",
    dob: "",
    country: "",
    streetAddress: "",
    state: "",
    city: "",
    postcode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("form submitted");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <form className="id-verification-container" onSubmit={handleSubmit}>
        <div className="section">
          <h2>Applicant Data</h2>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First name *"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name *"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="walletAddress"
              placeholder="Wallet address *"
              value={formData.walletAddress}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="date"
              name="dob"
              placeholder="dd - mm - yyyy *"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Country *</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>

        <div className="section">
          <label>
            Street Address <span className="required">*</span>
          </label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            required
          />
          <label>
            State / Province / Region <span className="required">*</span>
          </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <label>
            Town / City <span className="required">*</span>
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <label>
            Postcode / Zip <span className="required">*</span>
          </label>
          <input
            type="text"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
            required
          />
          <label>
            <input type="checkbox" name="verification" required /> I verify that
            all foregoing information is correct.{" "}
            <span className="required">*</span>
          </label>
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default IdVerification;
