import React from "react";
import "./Navbar.css";
import logo from "../../images/logo1.png";
import { Link, useNavigate, useLocation  } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = !!sessionStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const location = useLocation();
  const isLoginOrRegister = location.pathname === '/login' || location.pathname === '/register';
  const buttonClassName = isLoginOrRegister ? 'signIn-btn-none' : 'SignIn-btn';

  return (
    <div>
      <nav className="secondary-navbar">
        <div className="nav-logo-and-links">
          <img src={logo} alt="Logo" className="logo" />
          <ul className="secondary-nav-links">
            <li>
              <a href="/projects">Invest</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
        <div className="nav-signin-and-account">
          {isLoggedIn ? (
            <div className="dropdown">
              <span className="dropbtn">MyAccount</span>
              <div className="dropdown-content">
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/id-verification">ID Verification</Link>
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              </div>
            </div>
          ) : (
            <div className={buttonClassName}>
              <Link to="/login">Sign in</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
