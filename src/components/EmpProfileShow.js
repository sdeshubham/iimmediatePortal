import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const EmpProfileShow = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
        const token = Cookies.get("authToken");
        console.log("Token:", token);
        
        if (!token) {
          navigate("/signin");
          return;
        }
      
        try {
          const response = await fetch(`${baseUrl}/getAllUserDetails`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          });
      
          if (!response.ok) {
            throw new Error('Failed to fetch profile: ' + response.statusText);
          }
      
          // Check if response is JSON
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            if (data.status === 200) {
              setProfile(data.result);
            } else {
              alert("Failed to fetch profile");
            }
          } else {
            console.error("Received non-JSON response");
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };
      

    fetchProfile();
  }, [navigate]);

  // Display loading text until profile data is fetched
  if (!profile) return <p>Loading...</p>;

  // Display the profile details after they are fetched
  return (
    <div className="profile-card">
      <h2>{profile.name}</h2>
      <p><strong>Mobile:</strong> {profile.mobileNumber}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Gender:</strong> {profile.gender}</p>
      <p><strong>About:</strong> {profile.about}</p>
      <p><strong>Current Position:</strong> {profile.currentPosition}</p>
      <p><strong>Company:</strong> {profile.companyName}</p>
      <p><strong>Location:</strong> {profile.location}</p>
    </div>
  );
};

export default EmpProfileShow;
