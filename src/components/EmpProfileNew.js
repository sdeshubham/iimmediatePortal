import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const EmpProfileNew = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = Cookies.get("authToken");

      if (token) {
        try {
          // Replace 'userId' with the user ID you get from the token or cookies.
          const userId = "67d17c41535a0159eedc457a"; // Example user ID, use the actual userId here
          
          const response = await fetch(`${baseUrl}/api/getAllUserDetails`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: userId }), // Pass userId in the request body
          });

          const data = await response.json();

          if (data.status === 200) {
            setUserData(data.result[0]); // Set user data to state
          } else {
            setError(data.message);
          }
        } catch (error) {
          setError(error.message || "Something went wrong");
        }
      } else {
        navigate("/signin"); // Redirect to sign-in page if token is not found
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div className="profile-container">
      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData ? (
        <div className="profile-details">
          <h1>Profile of {userData.name}</h1>
          <img src={userData.image} alt="Profile" width={150} />
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Mobile Number:</strong> {userData.mobileNumber}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Gender:</strong> {userData.gender}</p>
          <p><strong>Status:</strong> {userData.status === "1" ? "Active" : "Inactive"}</p>
          <p><strong>About:</strong> {userData.about}</p>
          <p><strong>Current Position:</strong> {userData.currentPosition}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EmpProfileNew;
