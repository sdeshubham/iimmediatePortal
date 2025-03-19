// import React from "react";
// import { MdOutlineLocationOn } from "react-icons/md";
// import { IoMdTime } from "react-icons/io";
// import { useNavigate } from "react-router-dom";

// const SelectedProfCard = ({
//   id,
//   selectprof,
//   selProfname,
//   role,
//   companyName,
//   location,
//   noticeday,
//   skillOne,
//   skillTwo,
//   skillThree,
// }) => {
//   const navigate = useNavigate();
//   const handleViewProfile = (id) => {
//     navigate(`/employee/${id}`);
//   };

//   return (
//     <>
//       <div className="selectedprof">
//         <div className="selectedprof-card">
//           <img src={selectprof} alt="" />
//           <div className="selecprof-detail">
//             <h5>{selProfname}</h5>
//             <p className="selecprof-role">{role}</p>
//             <p className="selecprof-compName">{companyName}</p>
//             <div className="locat">
//               <div className="box">
//                 <MdOutlineLocationOn color="#727272" />
//                 <p className="box-p">{location}</p>
//               </div>
//               <div className="box box-pnotice">
//                 <IoMdTime color="#727272" />
//                 <p className="box-p box-pNotice">{noticeday} Days</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="selectprof-desc">
//           <p>
//             We are looking for someone with experience using AI software to
//             create realistic product photos for our Etsy shop.
//           </p>
//         </div>
//         <div className="skills">
//           <p className="skills-heaad">Skills: </p>
//           <p className="skills-set">{skillOne}</p>
//           <p className="skills-set">{skillTwo}</p>
//           <p className="skills-set">{skillThree}</p>
//         </div>
//         <button
//           className="profview-more"
//           onClick={() => handleViewProfile(employee.id)}
//         >
//           View Profile
//         </button>
//       </div>
//     </>
//   );
// };

// export default SelectedProfCard;

// import React from "react";
// import { MdOutlineLocationOn } from "react-icons/md";
// import { IoMdTime } from "react-icons/io";
// import { useNavigate } from "react-router-dom";

// const SelectedProfCard = ({
//   _id,
//   selectprof,
//   selProfname,
//   role,
//   companyName,
//   location,
//   noticePeriod,
//   skillOne,
//   skillTwo,
//   skillThree,
//   gender,
//   about,
// }) => {
//   const navigate = useNavigate();

//   const handleViewProfile = (id) => {
//     navigate(`/employee-profile?_id=${_id}`);
//   };

//   return (
//     <div className="selectedprof">
//       <div className="selectedprof-card">
//         <img src={selectprof} alt="" />
//         <div className="selecprof-detail">
//           <h5>{selProfname}</h5>
//           <p className="selecprof-role">{role}</p>
//           <p className="selecprof-compName">{companyName}</p>
//           <div className="locat">
//             <div className="box">
//               <MdOutlineLocationOn color="#727272" />
//               <p className="box-p">{location}</p>
//             </div>
//             <div className="box box-pnotice">
//               <IoMdTime color="#727272" />
//               <p className="box-p box-pNotice">{noticePeriod} Days</p>
//             </div>
//           </div>
//           <p>{gender}</p>
//         </div>
//       </div>
//       <div className="selectprof-desc">
//         <p>
//           {about}
//         </p>
//       </div>
//       <div className="skills">
//         <p className="skills-set">{skillOne}</p>
//         <p className="skills-set">{skillTwo}</p>
//         <p className="skills-set">{skillThree}</p>
//       </div>
//       <button className="profview-more" onClick={() => handleViewProfile(_id)}>
//         View Profile
//       </button>
//     </div>
//   );
// };

// export default SelectedProfCard;

import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../../stylesheets/Employer.css"

const SelectedProfCard = ({
  id,
  selectprof,
  selProfname,
  role,
  companyName,
  location,
  noticePeriod,
  skillOne,
  skillTwo,
  skillThree,
  gender,
  about,
  skills = [],
}) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/employee-profile/${id}`);
  };

  return (
    <div className="selectedprof">
      <div className="selectedprof-card">
        <img src={selectprof} alt="" />
        <div className="selecprof-detail">
          <h5>{selProfname}</h5>
          <p className="selecprof-role">{role}</p>
          <p className="selecprof-compName">{companyName}</p>
          <div className="locat">
            <div className="box">
              <MdOutlineLocationOn color="#727272" />
              <p className="box-p">{location}</p>
            </div>
            <div className="box box-pnotice">
              <IoMdTime color="#727272" />
              <p className="box-p box-pNotice">{noticePeriod} Days</p>
            </div>
          </div>
          <p>{gender}</p>
        </div>
      </div>
      <div className="selectprof-desc">
        <p>{about}</p>
      </div>
      <div className="skills">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <p key={index} className="skills-set">
              {skill}
            </p>
          ))
        ) : (
          <p></p>
        )}
      </div>
      <button className="profview-more" onClick={handleViewProfile}>
        View Profile
      </button>
    </div>
  );
};

export default SelectedProfCard;
