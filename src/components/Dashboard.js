import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    let authToken = token || Cookies.get("authToken");

    if (!authToken) {
      alert("Session expired! Please login again.");
      navigate("/signin");
      return;
    }

    try {
      const response = await axios.get(`${baseUrl}/employer/getEmployerAllDetails`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setUserData(response.data.res);
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response?.status === 401) {
        await refreshToken();
      }
    }
  };

  const refreshToken = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/v1/token/refreshToken`);
      Cookies.set("authToken", response.data.token, { expires: 1 });
      fetchUserData();
    } catch (error) {
      console.error("Error refreshing token:", error);
      logout();
    }
  };

  const logout = () => {
    Cookies.remove("authToken");
    navigate("/signin");
  };

  return (
    <div className="dashboard">
      <h2>Welcome to Dashboard</h2>
      {userData ? (
        <div className="user-info">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.contactNumber}</p>
          <p><strong>Company Name:</strong> {userData.companyName}</p>
          <p><strong>Designation:</strong> {userData.designationName}</p>
          <p><strong>Company Size:</strong> {userData.company_SizeMin}</p>
          <p><strong>Location:</strong> {userData.location?.join(", ")}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;
