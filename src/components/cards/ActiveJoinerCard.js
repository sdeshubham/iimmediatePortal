// import React from "react";

// const ActiveJoinerCard = ({ image, name, role, salary, experience }) => {
//   return (
//     <>
//       <div className="activeCard">
//         {image && (
//           <img className="activeCardImg" src={image} alt="Activejoin img" />
//         )}
//         <div className="avctivejoiner-details">
//           <div className="activejoiner-details-one">
//             <h4 className="activejoiner-name">{name}</h4>
//             <p className="activejoiner-name">{salary}</p>
//           </div>
//           <div className="activejoiner-details-one">
//             <p className="activejoiner-role">{role}</p>
//             <p className="activejoiner-role">{experience}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ActiveJoinerCard;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import activejoinerData from "../../components/cards/activeJoinerData"

// const ActiveJoinerCard = () => {
//   const [joinerData, setJoinerData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJoinerData = async () => {
//       try {

//         const response = await axios.get("http://localhost:3000/withOutLogin/active-limited-joiner");

//         if (response.status === 200) {
//           setJoinerData(response.data.userData);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJoinerData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       {activejoinerData.map((joiner, index) => (
//         <div key={index} className="activeCard">
//           {joiner.image && (
//             <img className="activeCardImg" src={joiner.image} alt="Activejoin img" />
//           )}
//           <div className="avctivejoiner-details">
//             <div className="activejoiner-details-one">
//               <h4 className="activejoiner-name">{joiner.name || "Unknown"}</h4>
//               <p className="activejoiner-name">{joiner.salary}</p>
//             </div>
//             <div className="activejoiner-details-one">
//               <p className="activejoiner-role">{joiner.currentPosition || "No Position"}</p>
//               <p className="activejoiner-role">{joiner.expYear} years of experience</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default ActiveJoinerCard;


import React, { useState, useEffect } from "react";
import axios from "axios";

const ActiveJoinerCard = () => {
  const [joinerData, setJoinerData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJoinerData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/withOutLogin/active-limited-joiner");

        if (response.status === 200) {
          setJoinerData(response.data.userData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJoinerData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {joinerData.map((joiner, index) => (
        <div key={index} className="activeCard">
          {joiner.image && (
            <img className="activeCardImg" src={joiner.image} alt="Activejoin img" />
          )}
          <div className="avctivejoiner-details">
            <div className="activejoiner-details-one">
              <h4 className="activejoiner-name">{joiner.name || "Unknown"}</h4>
              <p className="activejoiner-name">{joiner.salary}</p>
            </div>
            <div className="activejoiner-details-one">
              <p className="activejoiner-role">{joiner.currentPosition || "No Position"}</p>
              <p className="activejoiner-role">{joiner.expYear} years of experience</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ActiveJoinerCard;
