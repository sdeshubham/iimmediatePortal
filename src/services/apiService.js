// import axios from "axios";

// const BASE_URL = process.env.BASE_URL || "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

// export const sendOtp = async (mobileNumber, countryCode, purpose) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/api/mobileNumberVerificationSendOtp`, {
//       mobile: mobileNumber,
//       country_code: countryCode,
//       purpose,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error sending OTP:", error);
//     throw error.response?.data || "Failed to send OTP";
//   }
// };

// export const verifyOtp = async (otp, verificationId) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/api/mobileNumberVerificationSetup`, {
//       otp,
//       id: verificationId,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error verifying OTP:", error);
//     throw error.response?.data || "Failed to verify OTP";
//   }
// };

// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/api/register`, userData);
//     return response.data;
//   } catch (error) {
//     console.error("Error during registration:", error);
//     throw error.response?.data || "Failed to register";
//   }
// };


import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

// Function to fetch active joiners
export const fetchActiveJoiners = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/withOutLogin/active-limited-joiner`);

    // Check if response is in JSON format
    if (response.headers["content-type"]?.includes("application/json")) {
      return response.data;
    } else {
      throw new Error("Invalid response format. Expected JSON.");
    }
  } catch (error) {
    console.error("Error fetching active joiners:", error);
    throw error.response?.data || "Failed to fetch active joiners";
  }
};

// Function to send OTP
export const sendOtp = async (mobileNumber, countryCode, purpose) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/mobileNumberVerificationSendOtp`, {
      mobile: mobileNumber,
      country_code: countryCode,
      purpose,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error.response?.data || "Failed to send OTP";
  }
};

export const verifyOtp = async (otp, verificationId) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/mobileNumberVerificationSetup`, {
      otp,
      id: verificationId,
    });
    return response.data;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error.response?.data || "Failed to verify OTP";
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error.response?.data || "Failed to register";
  }
};
