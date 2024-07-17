import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PortFolio from "./components/Portfolio/Portfolio";
import IdVerification from "./components/Verification/Verification";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PropertyCard from "./components/ListProperties/List";
import PropertyDetails from "./components/ViewProperties/View";
import OryxComponent from "./components/Tinvest/List";
import InvestDashboard from "./components/Investment/investDashboard";
import Logout from "./components/Logout/Logout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<OryxComponent />} />
        <Route path="/invest" element={<InvestDashboard />} />

        <Route
          path="/portfolio"
          element={
            <PrivateRoute>
              <PortFolio />
            </PrivateRoute>
          }
        />
        <Route
          path="/id-verification"
          element={
            <PrivateRoute>
              <IdVerification />
            </PrivateRoute>
          }
        />
        <Route
          path="/marketplace"
          element={
            <PrivateRoute>
              <PropertyCard />
            </PrivateRoute>
          }
        />
        <Route
          path="/property/:id"
          element={
            <PrivateRoute>
              <PropertyDetails />
            </PrivateRoute>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;
