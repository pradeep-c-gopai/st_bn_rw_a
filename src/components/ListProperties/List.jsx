import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./List.css";
import Navbar from "../Navbar/Navbar";
import property1 from "../../images/property1.jpg";
import property2 from "../../images/property2.jpg";
import property3 from "../../images/property3.jpg";
import property4 from "../../images/property4.jpg";

const PropertyCard = () => {
  const properties = [
    {
      id: 1,
      title: "STARTER PROPERTY",
      image: property1,
      address: "13436 Corbett Ave, Detroit, MI 48213",
      totalPrice: "$75,405",
      tokenPrice: "$36.27",
      expectedIncome: "9.29%",
      incomeStartDate: "July 1, 2024",
      incomePerToken: "$4.67/year",
    },
    {
      id: 2,
      title: "STANDARD PROPERTY",
      image: property2,
      address: "1234 Beverly Hills, CA 90210",
      totalPrice: "$245,678",
      tokenPrice: "$43.45",
      expectedIncome: "12.34%",
      incomeStartDate: "January 1, 2025",
      incomePerToken: "$567.89/year",
    },
    {
      id: 3,
      title: "LUXURY PROPERTY",
      image: property3,
      address: "7154 SILVER TOWN, NYC 25010",
      totalPrice: "$45,678",
      tokenPrice: "$95.45",
      expectedIncome: "10.74%",
      incomeStartDate: "January 11, 2026",
      incomePerToken: "$567.89/year",
    },
    {
      id: 4,
      title: "ELITE PROPERTY",
      image: property4,
      address: "3444 NEWTOWN, SD 94315",
      totalPrice: "$345,678",
      tokenPrice: "$60.45",
      expectedIncome: "12.34%",
      incomeStartDate: "March 20, 2025",
      incomePerToken: "$567.89/year",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        {properties.map((property, index) => (
          <div className="property-card" key={index}>
            <div className="property-heading">
              <h3 className="propertyHeadText">{property.title}</h3>
            </div>
            <div className="property-content">
              <div
                className="property-image"
                style={{ backgroundImage: `url(${property.image})` }}
              >
                {/* Image is dynamically loaded via inline style */}
              </div>
              <div className="property-details">
                <p className="property-address">{property.address}</p>
                <div className="financials">
                  <div className="financial-item">
                    <span className="financial-label">TOTAL PRICE</span>
                    <br />
                    <span className="price">{property.totalPrice}</span>
                  </div>
                  <div className="financial-divider"></div>
                  <div className="financial-item">
                    <span className="financial-label">TOKEN PRICE</span>
                    <br />
                    <span className="price">{property.tokenPrice}</span>
                  </div>
                </div>
                <p className="incomeInfo">
                  <span className="label">Expected Income:</span>{" "}
                  {property.expectedIncome}
                </p>
                <p className="incomeInfo">
                  <span className="label">Income Start Date:</span>{" "}
                  {property.incomeStartDate}
                </p>
                <p className="incomeInfo">
                  <span className="label">Income per Token:</span>{" "}
                  {property.incomePerToken}
                </p>
                {/* Use Link component to navigate to /product/:id */}
                <Link
                  to={`/property/${property.id}`}
                  className="view-property-btn"
                >
                  VIEW PROPERTY
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCard;
