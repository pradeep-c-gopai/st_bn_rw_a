import React from "react";
import "./Home.css";
import ifscaLogo from "../../images/home1.png";
import polygonLogo from "../../images/logo1.png";
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="investment-card">
        <div className="left-section">
          <h1>
            Invest in global{" "}
            <span className="highlight">alternative assets</span> like never
            before
          </h1>
          <ul>
            <li>Access top-tier Real Estate opportunities</li>
            <li>Curated PE and VC investments coming soon</li>
            <li>Diversify across asset classes with low minimums</li>
            <li>Enhance liquidity with secondary market trading</li>
          </ul>
          <button className="join-button">
            <a href="http://localhost:3000/projects" className="view-pro">
              View Projects
            </a>
          </button>
        </div>
        <div className="right-section">
          <img src={ifscaLogo} alt="IFSCA Logo" className="ifsca-logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
