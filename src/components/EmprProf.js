import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Ensure you're using this to get ID from URL

const BASE_URL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const EmprProf = () => {
  const { id } = useParams();  // Fetch the ID from the URL
  const [employerData, setEmployerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployerData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/withOutLogin/getSingleCompanyData`,
          { id: id },
          { headers: { "Content-Type": "application/json" } }
        );

        console.log("API Response:", response.data);  // Check the response

        if (response.data.status === 200 && response.data.result) {
          setEmployerData(response.data.result);  // Store the fetched data
        } else {
          console.error("No data found for this ID.");
        }
      } catch (error) {
        console.error("Error fetching employer data:", error);
      } finally {
        setLoading(false);  // Stop the loading indicator
      }
    };

    fetchEmployerData();
  }, [id]);  // Re-fetch if the ID changes

  if (loading) return <p>Loading...</p>;

  if (!employerData) return <p>No employer data found.</p>;

  return (
    <div>
      <h1>{employerData.companyName}</h1>
      <p>Email: {employerData.email}</p>
      <p>Contact: {employerData.contactNumber}</p>
      <p>Designation: {employerData.designationName}</p>
    </div>
  );
};

export default EmprProf;
