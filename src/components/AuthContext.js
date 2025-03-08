import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("AuthContext User Updated:", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};


// import { AuthProvider } from "./AuthContext"; 

// const AppProvider = ({ children }) => {
//   return (
//     <AuthProvider>
//       {children}
//     </AuthProvider>
//   );
// };

// export default AppProvider;
