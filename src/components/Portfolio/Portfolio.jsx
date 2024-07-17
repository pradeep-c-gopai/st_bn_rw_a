import React from 'react';
import './Portfolio.css';
import Navbar from '../Navbar/Navbar';
// import logo from '../../images/logo1.png';

const PortFolio = () => {
    return (
        <div>
        <Navbar />
        <div className="portfolio-container">
            <div className="real-tokens">
                <h2>RealTokens</h2>
                <p>You don't currently own any RealT properties.</p>
                <p>To get started, visit: <a href="https://yourmarketplaceurl.com">The Marketplace</a></p>
                <p className="token-balance-notice">IF YOUR TOKEN BALANCES SEEM INACCURATE, PLEASE REFRESH THE PAGE IN A MINUTE.</p>
            </div>
            <div className="rent">
                <h2>Rent</h2>
                <p>To manage your Ethereum Rent, please connect using your one of your addresses below.</p>
                <button className="connect-wallet">CONNECT WALLET</button>
                <div className="ethereum-addresses">
                    <span>Your Ethereum Addresses</span>
                </div>
                <button className="manage-rent-reinvestments">MANAGE RENT REINVESTMENTS</button>
            </div>
        </div>
        </div>
    );
};

export default PortFolio;