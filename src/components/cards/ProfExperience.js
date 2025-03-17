import React from "react";
import "../../stylesheets/EmpProfile.css";
import expLogo from "../../images/expLogo.png"

const ProfExperience = ({
  expImgLogo,
  expRole,
  expCompany,
  expLocation,
  expDuration,
  expDesc,
}) => {
  return (
    <>
      <div className="expBox-card">
        <img src={expImgLogo || expLogo}alt="" />
        <div className="exp-boxTwo">
          <div className="exp-boxThree">
            <div className="exp-boxfour">
              <p className="expRole">{expRole}</p>
              <p className="expComp">{expCompany}</p>
              <p className="expLoact">{expLocation}</p>
            </div>
            <p className="expDuration">{expDuration}</p>
          </div>
          <p className="expDese">{expDesc}</p>
        </div>
      </div>
    </>
  );
};

export default ProfExperience;

// import React from "react";
// import axios from "axios";
// import { useAuth } from "../AuthContext";
// import "../../stylesheets/EmpProfile.css";

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const baseURL = `https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api`;

// const ProfExperience = ({
//   experience_id,
//   expImgLogo,
//   expRole,
//   expCompany,
//   expLocation,
//   expDuration,
//   expDesc = "refresh to get the description",
//   setExpArray,
// }) => {
//   const { user } = useAuth();

//   const handleDelete = () => {
//     if (user) {
//       console.log("experience id", experience_id);
//       axios.post(
//         `${baseURL}/deletedExperience`,
//         {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         },
//         {
//           _id: experience_id,
//         }
//       );

//       setExpArray((prev) => {
//         let newExpArray = [];
//         newExpArray = prev.filter((exp) => !(exp._id === experience_id));
//         return newExpArray;
//       });
//     }
//   };

//   return (
//     <>
//       <div className="expBox-card">
//         <img src={expImgLogo} alt="" />
//         <div className="exp-boxTwo">
//           <div className="exp-boxThree">
//             <div className="exp-boxfour">
//               <p className="expRole">{expRole}</p>
//               <p className="expComp">{expCompany}</p>
//               <p className="expLoact">{expLocation}</p>
//             </div>
//             <p className="expDuration">{`${expDuration.split("-")[0]} ${
//               months[Number(expDuration.split("-")[1]) - 1]
//             }`}</p>
//             <p className="expDuration">{expDuration}</p>
//           </div>
//           <p className="expDese">{expDesc}</p>
//         </div>
//         <div id="edit-btn-div">
//           <button
//             onClick={handleDelete}
//             id="exp-delete-btn"
//             className="exp-deleteBtn"
//             type="button"
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProfExperience;
