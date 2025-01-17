// import axios from "axios";

// const BASE_URL = "https://your-api-base-url.com/api";

// export const sendOtp = async (mobileNumber, countryCode, purpose) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/send-otp`, {
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
//     const response = await axios.post(`${BASE_URL}/verify-otp`, {
//       otp,
//       verification_id: verificationId,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error verifying OTP:", error);
//     throw error.response?.data || "Failed to verify OTP";
//   }
// };

// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/register`, userData);
//     return response.data;
//   } catch (error) {
//     console.error("Error during registration:", error);
//     throw error.response?.data || "Failed to register";
//   }
// };



import axios from "axios";

// const BASE_URL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";
const BASE_URL = process.env.BASE_URL || "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

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
      id: verificationId, // Use the correct key `id` as per the Postman collection
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
