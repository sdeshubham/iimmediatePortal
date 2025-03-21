// import React, { useState } from "react";
// import "../../stylesheets/EmpProfile.css";
// import expLogo from "../../images/defaultImg.png";
// import { RiEditBoxLine } from "react-icons/ri";
// import Experience from "../profileCards/Experience";

// const ProfExperience = ({
//   expImgLogo,
//   expRole,
//   expCompany,
//   expLocation,
//   expDuration,
//   expDesc,
// }) => {
//   const [showExperience, setShowExperience] = useState(false);

//   const toggleExperiencePopup = () => setShowExperience(!showExperience);

//   return (
//     <>
//       {showExperience && <Experience onClose={toggleExperiencePopup} />}
//       <div className="expBox-card">
//         <img src={expImgLogo || expLogo} alt="" />

//         <div className="exp-boxTwo">
//           <div className="exp-boxThree">
//             <div className="exp-boxfour">
//               <p className="expRole">{expRole}</p>
//               <p className="expComp">{expCompany}</p>
//               <p className="expLoact">{expLocation}</p>
//             </div>
//             <p className="expDuration">{expDuration}</p>
//           </div>
//           <p className="expDese">{expDesc}</p>
//         </div>

//         <div className="project-editBtn">
//           <button>
//             <RiEditBoxLine size={20} onClick={toggleExperiencePopup} />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProfExperience;





import React, { useState } from "react";
import "../../stylesheets/EmpProfile.css";
import expLogo from "../../images/defaultImg.png";
import { RiEditBoxLine } from "react-icons/ri";
import Experience from "../profileCards/Experience";

const ProfExperience = ({
  expImgLogo,
  expRole,
  expCompany,
  expLocation,
  expDuration,
  expDesc,
  expId,
}) => {
  const [showExperience, setShowExperience] = useState(false);
  const [experienceToEdit, setExperienceToEdit] = useState(null);

  const toggleExperiencePopup = () => {
    setShowExperience(!showExperience);
    if (!showExperience) {
      setExperienceToEdit({
        id: expId,
        role: expRole,
        company: expCompany,
        location: expLocation,
        duration: expDuration,
        description: expDesc,
      });
    }
  };

  return (
    <>
      {showExperience && (
        <Experience
          onClose={toggleExperiencePopup}
          experienceToEdit={experienceToEdit}
          isEditing={true}
        />
      )}
      <div className="expBox-card">
        <img src={expImgLogo || expLogo} alt="" />

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

        <div className="project-editBtn">
          <button>
            <RiEditBoxLine size={20} onClick={toggleExperiencePopup} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfExperience;
