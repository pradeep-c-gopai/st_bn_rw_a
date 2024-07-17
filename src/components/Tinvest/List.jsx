import React from "react";
import "./List.css";
import oryxImage from "../../images/Oryx.jpg";
import Navbar from "../Navbar/Navbar";

const OryxComponent = () => {

  const handleInvestPageRedirect = (e) => {
    e.preventDefault();
    window.location.href = '/invest';
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="oryx-container">
        <div className="oryx-content">
          <h1 className="oryx-title">ORYX</h1>
          <p className="oryx-description">
            Terazo is proud to offer exclusive access to Oryx – India’s first
            regulated tokenized property. Our flagship tokenized fund is
            investing US $7M into Oryx, a grade-A commercial development by
            Savvy Group and Collated Ventures. The 850,000 sq. ft. greenfield
            building is located in GIFT SEZ, India’s global fintech hub.
          </p>
          <div className="oryx-details-grid">
            <div className="oryx-detail">
              <span className="oryx-label">Asset class</span>
              <br />
              <span className="oryx-value">Real estate</span>
            </div>
            <div className="oryx-detail">
              <span className="oryx-label">Asset value</span>
              <br />
              <span className="oryx-value">US $48M</span>
            </div>
            <div className="oryx-detail">
              <span className="oryx-label">Fund size</span>
              <br />
              <span className="oryx-value">US $7M</span>
            </div>
            <div className="oryx-detail">
              <span className="oryx-label">Target returns</span>
              <br />
              <span className="oryx-value">› 18%*</span>
            </div>
            <div className="oryx-detail">
              <span className="oryx-label">Fund structure</span>
              <br />
              <span className="oryx-value">Single-Asset</span>
            </div>
            <div className="oryx-detail">
              <span className="oryx-label">Project stage</span>
              <br />
              <span className="oryx-value">New Build</span>
            </div>
          </div>
          <br></br>
          <br></br>
          <button className="oryx-button" onClick={handleInvestPageRedirect}>Invest now</button>
        </div>
        <div className="oryx-image-container">
          <img src={oryxImage} alt="Oryx Building" className="oryx-image" />
        </div>
      </div>
      <div className="investment-highlights">
        <h1>Investment Highlights</h1>
        <ul>
          <li><span className="dot"></span>
            An opportunity for global investors to get exposure in &nbsp;
            <a href="#"> commercial real estate investment </a>&nbsp;
            in GIFT SEZ, India
          </li>
          <li><span className="dot"></span>
            Positioned to take advantage of &nbsp;
            <a href="#"> growing Indian real estate </a>&nbsp; landscape
          </li>
          <li><span className="dot"></span>
            Allows investors to diversify their exposure to &nbsp;
            <a href="#"> top-tier private investments </a>&nbsp;
          </li>
          <li><span className="dot"></span>
            Opportunity to &nbsp;
            <a href="#"> earn capital appreciation </a>&nbsp; with lower minimums
          </li>
          <li><span className="dot"></span>
            Special carry structure for investors &nbsp;
            <a href="#"> enhancing returns </a>
          </li>
          <li><span className="dot"></span>
            Strong track record of developers with &nbsp;
            <a href="#"> 20+ years </a> &nbsp; of commercial and residential development
          </li>
          <li><span className="dot"></span>
            Positive prospects on leasing as per &nbsp;
            <a href="#"> report </a>&nbsp; by Cushman & Wakefield
          </li>
        </ul>
      </div>
      <div className="subscription-eligibility-div">
          <div className="subscription-eligibility">
            <div className="eligibility">
              <h3>Eligibility</h3>
              <p>KYC & AML check</p>
              <p>Net worth &gt; US $150,000</p>
              <p>
                Tax resident of
                <a href="#"> permitted country </a>
              </p>
            </div>
            <div class="oyrx-cta-text-line"></div>
            <div className="primary-subscription">
              <h3>Primary Subscription</h3>
              <p>100% Subscribed</p>
            </div>
            <div class="oyrx-cta-text-line"></div>
            <div className="secondary-access">
              <h3>Secondary Access</h3>
              <p>Tokens starting as low as USD <br />$1000, subject to availability.</p>
              <a href="#">Join the waitlist.</a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default OryxComponent;
