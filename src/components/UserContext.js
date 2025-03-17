// import { createContext, useState } from "react";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [userData, setUserData] = useState(null);

//   return (
//     <UserContext.Provider value={{ userData, setUserData }}>
//       {children}
//     </UserContext.Provider>
//   );
// };


import axios from "axios"

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const getSingleUser = async () => {
    try {
const res = await axios.get(`${baseUrl}/api/getAllUserDetails`)
const singleUser = await res.data;
    } catch (error) {

    }
}