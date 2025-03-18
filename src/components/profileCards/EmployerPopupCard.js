// import React from "react";

// const EmployerPopupCard = () => {
//   return (
//     <>
//       <div className="empyr-box">
//         <div className="empyr-inphead">
//           <h3>Company Details</h3>
//           <p>
//             Empower your team with a visionary company that leads innovation,
//             fosters growth, and drives success in every project
//           </p>
//         </div>
//         <div className="empyr-inp-box">
//           <div className="empyr-inp-fieldbox">
//             <label htmlFor="">Company Description</label>
//             <textarea
//               className="empyr-inp-fileds comp-desc-empyr"
//               type="text"
//               placeholder="Company Description"
//             />
//           </div>
//           <div className="empyr-inp-fieldbox">
//             <label htmlFor="">Website url</label>
//             <input
//               className="empyr-inp-fileds"
//               type="text"
//               placeholder="Website url"
//             />
//           </div>
//           <div className="empyr-inp-fieldbox">
//             <label htmlFor="">Industry</label>
//             <input
//               className="empyr-inp-fileds"
//               type="text"
//               placeholder="Industry"
//             />
//           </div>
//           <div className="empyr-inp-fieldbox">
//             <label htmlFor="">Contact number</label>
//             <input
//               className="empyr-inp-fileds"
//               type="number"
//               placeholder="Contact number"
//             />
//           </div>
//           <div className="empyr-inp-fieldbox">
//             <label htmlFor="">Company Address</label>
//             <input
//               className="empyr-inp-fileds"
//               type="text"
//               placeholder="Company Address"
//             />
//           </div>
//           <div className="empyr-inp-fieldbox">
//             <label htmlFor="">Founded year</label>
//             <input
//               className="empyr-inp-fileds"
//               type="text"
//               placeholder="Founded year"
//             />
//           </div>
//         </div>
//         <div className="expInp-btns">
//           <div>
//             <button className="exp-deleteBtn" type="button">
//               Delete
//             </button>
//             <button className="exp-submitBtn" type="submit">
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmployerPopupCard;


import React, { useState } from "react";
import axios from "axios";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const EmployerPopupCard = ({ fetchUserData }) => {
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [companyFullAddress, setCompanyFullAddress] = useState("");
  const [founded, setFounded] = useState("");

  const handleSubmit = async () => {
    const data = {
      description,
      website,
      industry,
      contactNumber,
      companyFullAddress,
      founded,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/employer/editEmployer`,
        data
      );
      if (response.data.success) {
        fetchUserData(); // Refresh the data after successful update
      }
    } catch (error) {
      console.error("Error updating employer data:", error);
    }
  };

  return (
    <>
      <div className="empyr-box">
        <div className="empyr-inphead">
          <h3>Company Details</h3>
          <p>
            Empower your team with a visionary company that leads innovation,
            fosters growth, and drives success in every project
          </p>
        </div>
        <div className="empyr-inp-box">
          <div className="empyr-inp-fieldbox">
            <label htmlFor="">Company Description</label>
            <textarea
              className="empyr-inp-fileds comp-desc-empyr"
              placeholder="Company Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="empyr-inp-fieldbox">
            <label htmlFor="">Website url</label>
            <input
              className="empyr-inp-fileds"
              type="text"
              placeholder="Website url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="empyr-inp-fieldbox">
            <label htmlFor="">Industry</label>
            <input
              className="empyr-inp-fileds"
              type="text"
              placeholder="Industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>
          <div className="empyr-inp-fieldbox">
            <label htmlFor="">Contact number</label>
            <input
              className="empyr-inp-fileds"
              type="number"
              placeholder="Contact number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div className="empyr-inp-fieldbox">
            <label htmlFor="">Company Address</label>
            <input
              className="empyr-inp-fileds"
              type="text"
              placeholder="Company Address"
              value={companyFullAddress}
              onChange={(e) => setCompanyFullAddress(e.target.value)}
            />
          </div>
          <div className="empyr-inp-fieldbox">
            <label htmlFor="">Founded year</label>
            <input
              className="empyr-inp-fileds"
              type="text"
              placeholder="Founded year"
              value={founded}
              onChange={(e) => setFounded(e.target.value)}
            />
          </div>
        </div>
        <div className="expInp-btns">
          <div>
            <button className="exp-deleteBtn" type="button">
              Delete
            </button>
            <button className="exp-submitBtn" type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerPopupCard;
