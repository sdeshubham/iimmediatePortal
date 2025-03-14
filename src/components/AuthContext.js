import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const base_URL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com" 

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(() => sessionStorage.getItem("userType"));
  const [userToken, setUserToken] = useState(null);
  const [employerMobileNumber, setEmployerMobileNumber] = useState(() => sessionStorage.getItem("employerMobileNumber"))

  useEffect(() => {
    if (userType === "employee") {
      const fetchingDetailsBeforeLoading = async () => {
        await axios.post(`${base_URL}/api/getUserAllDetails`, {
          "userId": sessionStorage.getItem("userId")
        })
        .then((response) => setUser(response.data.result[0]))
        .catch((err) => console.log("Error fetching data in the global context", err))
    
        const data = new URLSearchParams();
        data.append("otp", '1234')
        data.append("id", sessionStorage.getItem("userId"))
        
        axios.post(`${base_URL}/api/mobileNumberVerificationSendOtp`, {
          "mobileNumber": user.mobileNumber,
          "isForLogin": 1
        })
        .then((response) => {
          axios.post(`${base_URL}/api/mobileNumberVerificationSetup`, data)
          .then((response) => setUserToken(response.data.token))
        })
      }
  
      // upar promise chaining kiya hai, logic me changes karne se pehle mere se puch lena
  
      fetchingDetailsBeforeLoading()
    }
    else if (userType === "employer") {
      const fetchingDetailsBeforeLoading = async () => {
        const data = new URLSearchParams();
        data.append("otp", '1234')
        data.append("id", sessionStorage.getItem("userId"))
        
        await axios.post(`${base_URL}/employer/mobileNumberVerificationSendOtp`, {
          "mobileNumber": employerMobileNumber,
          "isForLogin": 1
        })
        .then((response) => {
          axios.post(`${base_URL}/employer/mobileNumberVerificationSetup`, data)
          .then((response) => setUserToken(response.data.token))
        })
  
        axios.post(`${base_URL}/employer/getEmployerAllDetails`, {
          Headers: {
            'Authorization': `Bearer ${userToken}`
          }
        })
        .then((response) => setUser(response.data.res))
        .catch((err) => console.log("Error fetching data in the global context", err))
      }
  
      // upar promise chaining kiya hai, logic me changes karne se pehle mere se puch lena
  
      fetchingDetailsBeforeLoading()
    }
  }, [user, userType, userToken])

  return (
    <AuthContext.Provider value={{ user, setUser, userToken, setUserToken, userType, setUserType, employerMobileNumber, setEmployerMobileNumber }}>
      {children}
    </AuthContext.Provider>
  );
};
