import React, { createContext, useState } from "react";

export const CandidateContext = createContext();

export const CandidateProvider = ({ children }) => {
  const [candidateData, setCandidateData] = useState(null);

  return (
    <CandidateContext.Provider value={{ candidateData, setCandidateData }}>
      {children}
    </CandidateContext.Provider>
  );
};
