import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com"; // Ensure this is correct

const UserDetails = () => {
  const { userId } = useParams();  // Grab userId from URL
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/getAllUserDetails`, {
          params: { userId },  // Pass userId as query parameter
        });

        if (response.data.status === 200) {
          setUserDetails(response.data.result);  // Set the response data
        } else {
          alert("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Error fetching user data.");
      }
    };

    fetchUserData();
  }, [userId]);  // Re-run the effect when userId changes

  return (
    <div>
      {userDetails ? (
        <div>
          <h1>User Details</h1>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          <p>Location: {userDetails.location}</p>
          <p>Specialization: {userDetails.specialization}</p>
          <p>Experience: {userDetails.experienceInStack}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserDetails;
