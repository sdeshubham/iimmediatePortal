// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };



import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [employerName, setEmployerName] = useState(""); // Employer name ko store karne ke liye state

  // Login function to set user data
  const login = (userData) => {
    setUser(userData);
    setEmployerName(userData?.name || ""); // Employer ka naam store karna
  };

  // Logout function to clear user data
  const logout = () => {
    setUser(null);
    setEmployerName(""); // Employer name bhi clear karna
  };

  return (
    <AuthContext.Provider value={{ user, employerName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
