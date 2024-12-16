import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import CandiProfile from "./components/CandiProfile";
import EmpProfile from "./components/EmpProfile";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/privacy&policy" element={<Privacy />} />
          <Route path="/terms&condition" element={<Terms />} />

          <Route path="/candidate" element={<CandiProfile />} />
          <Route path="/employee" element={<EmpProfile />} />

          {/* Authentication Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
