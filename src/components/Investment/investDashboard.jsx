import React, { useState, useEffect } from "react";
import "./investDashboard.css";
import Navbar from "../Navbar/Navbar";
import { ethers } from "ethers"; // Import ethers.js
import abi from "./Tokenabi.json";
import TrustedAgentABI from "./TrustedAgent.json";
const contractAddress = "0x2E602E09E9946a1676B3f0708804006F3e847F39"; // Your token contract address

const InvestDashboard = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenBalance, setTokenBalance] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [usdtValue, setUsdtValue] = useState(""); // State for USDT input value
  const [equivalentTokens, setEquivalentTokens] = useState(""); // State for equivalent tokens
  const [totalUsdtWorth, setTotalUsdtWorth] = useState("");
  // Define the connectWallet function
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        // Request access to MetaMask
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length > 0) {
          // Set the wallet address
          setWalletAddress(accounts[0]);
        }
      } else {
        // MetaMask not detected
        alert(
          "MetaMask not detected. Please install MetaMask to connect your wallet."
        );
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const handleInputChange = async (event) => {
    const value = event.target.value;
    const multipliedValue = parseFloat(value) * 1e6; // Multiply value by 10^6
    setUsdtValue(value); // Update usdtValue state with input value
    try {
      // Call your API to fetch equivalent tokens
      const response = await fetch("http://localhost:8000/api/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usdt: multipliedValue }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("dataaa", data.value);
      setEquivalentTokens(data.value); // Update state with fetched equivalent tokens
    } catch (error) {
      console.error("Error fetching equivalent tokens:", error);
      setEquivalentTokens(""); // Clear equivalentTokens in case of error
    }
  };

  const handleInvest = async () => {
    try {
      if (walletAddress && window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        // Create a contract instance

        const usdtContract = "0x587F0592Eec6035D9fff3318Df9ba5cf4fCEd002";
        const tokenContract = new ethers.Contract(usdtContract, abi, signer);
        const usdtvalueInwei = Number(usdtValue) * 1e6;

        const approve = await tokenContract.approve(
          "0xD17B8Dea78abde32160d90b3ba147F0aE6a05Dbd",
          usdtvalueInwei
        );
        await approve.wait();

        const InvestContract = new ethers.Contract(
          "0xD17B8Dea78abde32160d90b3ba147F0aE6a05Dbd",
          TrustedAgentABI,
          signer
        );

        const invest = await InvestContract.Invest(
          walletAddress,
          usdtvalueInwei
        );

        await invest.wait();
        setIsModalOpen(false);
        alert('Invested successfully!');
        fetchTokenDetails();
      }
    } catch (error) {
      console.error("Error fetching token details:", error);
    }
  };

  // Function to fetch token details
  const fetchTokenDetails = async () => {
    try {
      if (walletAddress && window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        // Create a contract instance
        const tokenContract = new ethers.Contract(
          contractAddress,
          abi,
          provider
        );

        // Fetch token details asynchronously
        const name = await tokenContract.name();
        const symbol = await tokenContract.symbol();
        const balance = await tokenContract.balanceOf(walletAddress);

        // Update state with fetched details
        setTokenName(name);
        setTokenSymbol(symbol);
        setTokenBalance(balance / 1e18);
        setTotalUsdtWorth((balance / 1e18) * 1);
      } else {
        console.error("Wallet address or MetaMask not available.");
      }
    } catch (error) {
      console.error("Error fetching token details:", error);
    }
  };

  useEffect(() => {
    // Call connectWallet when component mounts
    connectWallet();
  }, []);

  useEffect(() => {
    // Fetch token details when wallet address changes
    if (walletAddress) {
      fetchTokenDetails();
    }
  }, [walletAddress]); // Dependency array ensures this effect runs when walletAddress changes

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Navbar />
      <div className="connect-wallet">
        <h4 className="wallet-address">{walletAddress}</h4>
        <button className="button" onClick={connectWallet}>
          Connect Wallet
        </button>
      </div>
      <div className="container">
        <div className="header">
          <div className="token-info">
            <div className="token-icon">T</div>
            <div className="token-details">
              <h1 className="token-name">{tokenName}</h1>
              <span className="token-status">Tokenholder</span>
            </div>
          </div>
          <div className="balance-info">
            <div className="balance">
              {tokenBalance} {tokenSymbol}
            </div>
            <div className="balance-value">${totalUsdtWorth}</div>
          </div>
        </div>

        <div className="status-section">
          <div className="status-block">
            <div className="status-value blocked">0</div>
            <div className="status-label">Blocked</div>
          </div>
          <div className="status-block">
            <div className="status-value">5</div>
            <div className="status-label">Unblocked</div>
          </div>
        </div>

        <div className="token-info-section">
          <div className="token-info-row">
            <div className="token-info-label">Token name</div>
            <div className="token-info-value">{tokenName}</div>
          </div>
          <div className="token-info-row">
            <div className="token-info-label">Token symbol</div>
            <div className="token-info-value">{tokenSymbol}</div>
          </div>
          <div className="token-info-row">
            <div className="token-info-label">Token address</div>
            <div className="token-info-value">
              <a href={`https://etherscan.io/address/${contractAddress}`}>
                {contractAddress}
              </a>
            </div>
          </div>
          <div className="token-info-row">
            <div className="token-info-label">Token status</div>
            <div className="token-info-value">Active</div>
          </div>
          <div className="token-info-row">
            <div className="token-info-label">Valuation</div>
            <div className="token-info-value">1 {tokenSymbol} = $1.00</div>
          </div>
        </div>

        <div className="button-group">
          <button className="button">Transfer tokens</button>
          <button className="button">Redeem</button>
          <button className="button" onClick={openModal}>
            Invest
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Invest</h2>
            <div>
              <label>USDT Value:</label>
              <input
                type="number"
                value={usdtValue}
                onChange={handleInputChange}
                placeholder="Enter USDT value"
                required
              />
            </div>
            <div>
              <label>Equivalent Tokens:</label>
              <p>{equivalentTokens}</p>
            </div>
            <div>
              <button className="button-sumbit-invest" onClick={handleInvest}>
                Invest
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestDashboard;
