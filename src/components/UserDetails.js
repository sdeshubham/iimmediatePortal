import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com"; // Ensure this is correct

const UserDetails = () => {
  const [queryParams] = useSearchParams();
  const [userId, setUserId] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

    // Re-run the effect when userId changes

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
