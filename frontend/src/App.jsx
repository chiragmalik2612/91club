import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileContainer from "./components/MobileContainer";
import Navbar from "./components/Navbar";
import "./App.css";
import Tabs from "./components/Tabs";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";
import Activity from "./pages/Activity";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <MobileContainer>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/account" element={<Profile />} />
        </Routes>

        <Tabs />
      </MobileContainer>
    </Router>
  );
}

export default App;
