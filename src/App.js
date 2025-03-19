import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Employer from "./components/Employer";
import EmpFilter from "./components/cards/EmpFilter";
import { AuthProvider } from './components/AuthContext';
import UserDetails from "./components/UserDetails";
import ScrollToTop from "./components/ScrollToTop";
import EmployeeProfile from "./components/EmployeeProfile";
import EmployerProfile from "./components/EmployerProfile";
import EmpProfileShow from "./components/EmpProfileShow";
import Employee from "./components/EmployeePage";
import EmployeePage from "./components/EmployeePage";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Header />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/empfilter" element={<EmpFilter />} />

          {/* Policy & Terms Routes */}
          <Route path="/privacy&policy" element={<Privacy />} />
          <Route path="/terms&condition" element={<Terms />} />

          {/* Profile Pages */}
          <Route path="/employer" element={<Employer />} />
          <Route path="/employee-page" element={<EmployeePage />} />
          
          <Route path="/employee-profile/:id" element={<EmployeeProfile />} />
          <Route path="/employer-profile/:id" element={<EmployerProfile />} />
          
          <Route path="/active-joiner-profile/:id" element={<EmployeeProfile />} />
          {/* <Route path="/employer-profile/:id" element={<EmployerProfile />} /> */}

          {/* <Route path="/employeesprofile" element={<EmpProfileShow />} /> */}
          <Route path="/user-details/:userId" element={<UserDetails />} />

          {/* Authentication Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <Footer />
        <ScrollToTop />
      </Router>
    </AuthProvider>
  );
};

export default App;
