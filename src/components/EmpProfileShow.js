// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";

// const BASE_URL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

// const EmpProfileShow = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchUserData = async (token) => {
//     try {
//       const response = await axios.post(
//         `${BASE_URL}/api/getAllUserDetails`,
//         { userId: "67d17c41535a0159eedc457a" },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.data.status === 200) {
//         setUserData(response.data.result[0]);
//         setLoading(false);
//       } else {
//         throw new Error("Failed to fetch user data");
//       }
//     } catch (err) {
//       if (err.response && err.response.status === 401) {
//         refreshAuthToken();
//       } else {
//         setError("Error fetching data");
//         setLoading(false);
//       }
//     }
//   };

//   const refreshAuthToken = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/api/v1/token/refreshToken`);
//       if (response.data.status === 200) {
//         Cookies.set("authToken", response.data.token);
//         fetchUserData(response.data.token);
//       } else {
//         throw new Error("Token refresh failed");
//       }
//     } catch (err) {
//       setError("Session expired. Please log in again.");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const token = Cookies.get("authToken");
//     if (token) {
//       fetchUserData(token);
//     } else {
//       setError("No token found. Please log in.");
//       setLoading(false);
//     }
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div>
//       <h2>{userData.name}</h2>
//       <p><strong>Email:</strong> {userData.email}</p>
//       <p><strong>Mobile:</strong> {userData.mobileNumber}</p>
//       <p><strong>Position:</strong> {userData.currentPosition}</p>
//       <p><strong>Location:</strong> {userData.location}</p>
//       <img src={userData.image} alt={userData.name} style={{ width: "150px", borderRadius: "10px" }} />
//     </div>
//   );
// };

// export default EmpProfileShow;

// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

// const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

// const EmpProfileShow = () => {
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);
//   const authToken = Cookies.get("authToken");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (!authToken) return;
//       try {
//         const response = await fetch(`${baseUrl}/api/getAllUserDetails`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${authToken}`,
//           },
//           body: JSON.stringify({ userId: "67d17c41535a0159eedc457a" }),
//         });
//         const data = await response.json();
//         if (data.status === 200) {
//           setUserData(data.result[0]);
//         } else {
//           setError(data.message);
//         }
//       } catch (error) {
//         setError("Failed to fetch user data");
//       }
//     };

//     fetchUserData();
//   }, [authToken]);

//   const handleLogout = () => {
//     Cookies.remove("authToken");
//     navigate("/signin");
//   };

//   if (!authToken) {
//     return <p>Please log in to view your profile.</p>;
//   }

//   return (
//     <div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {userData ? (
//         <div>
//           <h2>{userData.name}</h2>
//           <img src={userData.image} alt="Profile" width={100} />
//           <p>Email: {userData.email}</p>
//           <p>Mobile: {userData.mobileNumber}</p>
//           <p>Position: {userData.currentPosition}</p>
//           <p>Location: {userData.location}</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default EmpProfileShow;


import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

// You can replace baseUrl if needed
const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const EmpProfileShow = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const authToken = Cookies.get("authToken"); // Get token from cookies
  const userId = Cookies.get("userId"); // Get user ID from cookies
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken || !userId) {
      navigate("/signin"); // If no token or user ID, redirect to login
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/getAllUserDetails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({ userId: userId }),
        });

        const data = await response.json();

        if (data.status === 200) {
          setUserData(data.result[0]);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("Error fetching data");
      }
    };

    fetchUserData();
  }, [authToken, userId, navigate]);

  const handleLogout = () => {
    Cookies.remove("authToken");
    Cookies.remove("userId");
    navigate("/signin");
  };

  if (!authToken || !userId) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData ? (
        <div>
          <h2>{userData.name}</h2>
          <img src={userData.image || "default-image-url.jpg"} alt="Profile" width={100} />
          <p>Email: {userData.email}</p>
          <p>Mobile: {userData.mobileNumber}</p>
          <p>Position: {userData.currentPosition}</p>
          <p>Location: {userData.location}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EmpProfileShow;
