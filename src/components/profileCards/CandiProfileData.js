// CandiProfileData.js
export const setCandiProfileData = (data) => {
    localStorage.setItem("candidateProfile", JSON.stringify(data)); // Store data in local storage
  };
  
  export const getCandiProfileData = () => {
    const data = localStorage.getItem("candidateProfile");
    return data ? JSON.parse(data) : null;
  };
  