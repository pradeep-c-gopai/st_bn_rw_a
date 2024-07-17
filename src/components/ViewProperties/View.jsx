import React from "react";
import { useParams } from "react-router-dom";
import "./View.css";
import property1 from "../../images/property1.jpg";
import Navbar from "../Navbar/Navbar";
const properties = [
  {
    id: 1,
    address: "13436 Corbett Ave, Detroit, MI 48213",
    imageUrl: property1,
    totalInvestment: "$75,405.00",
    tokenPrice: "$50.27",
    stock: 644,
    maxPurchase: 5,
    expectedIncome: "9.29%",
    incomeStartDate: "July 1, 2024",
    incomePerToken: "$4.67/year",
    totalTokens: 1500,
    propertyType: "Single Family",
    country: "USA",
    source: "RealT",
    neighborhood: "Outer Drive - Hayes",
    constructionYear: 1941,
    bedroomBath: "3 Beds / 1 Bath",
    rentalType: "Long Term",
    rented: "Fully Rented",
    rentSubsidy: "No",
  },

  // Add more properties as needed
];

const PropertyDetails = () => {
  const { id } = useParams();

  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="property-details-container">
        {properties.map((property, index) => (
          <div key={index} className="property-card-container">
            <div className="property-header">
              <h2 className="property-address-name">{property.address}</h2>
              <button className="view-smart-contracts-btn">
                VIEW SMART CONTRACTS: <span className="eth-address">ETH</span>
              </button>
            </div>
            <div className="property-content-container">
              <div className="property-image-container">
                <img
                  className="propert-image-viewproperty"
                  src={property.imageUrl}
                  alt="Property"
                />
              </div>
              <div className="property-summary-container">
                <h2 className="total-investment-label">
                  TOTAL INVESTMENT: {property.totalInvestment}
                </h2>
                <div className="token-purchase-container">
                  <div className="quantity-purchase-btn-container">
                    <input
                      type="number"
                      className="token-quantity-input"
                      value="1"
                    />
                    <button className="purchase-tokens-btn">
                      PURCHASE TOKENS | {property.tokenPrice}
                    </button>
                  </div>
                  <div className="stock-info-container">
                    <p className="stock-info-item stock-label">
                      STOCK: {property.stock}
                    </p>
                    <p className="stock-info-item purchase-label">
                      Max purchase: {property.maxPurchase}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="property-highlights-container">
              <div className="tabs-container">
                <h2 className="tab-btn ">PROPERTY DETAILS</h2>
              </div>
              <div className="highlight-content-container">
                <div className="highlight-left-container">
                  <p className="highlight-item-container">
                    <span className="highlight-label-name">
                      Expected Income:
                    </span>
                    <span className="highlight-value-name">
                      {property.expectedIncome}
                    </span>
                  </p>
                  <p className="highlight-item-container">
                    <span className="highlight-label-name">
                      Income Start Date:
                    </span>
                    <span className="highlight-value-name">
                      {property.incomeStartDate}
                    </span>
                  </p>
                  <p className="highlight-item-container">
                    <span className="highlight-label-name">
                      Income per Token:
                    </span>
                    <span className="highlight-value-name">
                      {property.incomePerToken}
                    </span>
                  </p>
                  <p className="highlight-item-container">
                    <span className="highlight-label-name">Token Price:</span>
                    <span className="highlight-value-name">
                      {property.tokenPrice}
                    </span>
                  </p>
                  <p className="highlight-item-container highlight-item-container-last">
                    <span className="highlight-label-name">Total Tokens:</span>
                    <span className="highlight-value-name">
                      {property.totalTokens}
                    </span>
                  </p>
                </div>
                <div className="highlight-right-container">
                  <p className="highlight-item-container">
                    <span className="highlight-label-name">Property Type:</span>
                    <span className="highlight-value-name">
                      {property.propertyType}
                    </span>
                  </p>
                  <p className="highlight-item-container">
                    <span className="highlight-label-name">Full Address:</span>
                    <span className="highlight-value-name">
                      {property.address}
                    </span>
                  </p>
                  <p className="highlight-item-container">
                    <span className="highlight-label-name">Country:</span>
                    <span className="highlight-value-name">
                      {property.country}
                    </span>
                  </p>
                  <p className="highlight-item-container">
                    <span className="highlight-label-name">Source:</span>
                    <span className="highlight-value-name">
                      {property.source}
                    </span>
                  </p>
                  <p className="highlight-item-container">
                    <span className="highlight-label-name">Neighborhood:</span>
                    <span className="highlight-value-name">
                      {property.neighborhood}
                    </span>
                  </p>
                  <p className="highlight-item-container">
                    <span className="highlight-label-name">
                      Construction Year:
                    </span>
                    <span className="highlight-value-name">
                      {property.constructionYear}
                    </span>
                  </p>
                  <p className="highlight-item-container">
                    <span className="highlight-label-name">Bedroom/Bath:</span>
                    <span className="highlight-value-name">
                      {property.bedroomBath}
                    </span>
                  </p>
                  <p className="highlight-item-container">
                    <span className="highlight-label-name">Rental Type:</span>
                    <span className="highlight-value-name">
                      {property.rentalType}
                    </span>
                  </p>
                  <p className="highlight-item-container">
                    <span className="highlight-label-name">Rented?</span>
                    <span className="highlight-value-name">
                      {property.rented}
                    </span>
                  </p>
                  <p className="highlight-item-container highlight-item-container-last">
                    <span className="highlight-label-name">Rent Subsidy?</span>
                    <span className="highlight-value-name">
                      {property.rentSubsidy}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetails;
