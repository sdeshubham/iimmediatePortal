import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa";

const SelectedProfCard = ({
  selectprof,
  selProfname,
  role,
  companyName,
  location,
  noticeday,
  skillOne,
  skillTwo,
  skillThree,
}) => {
  return (
    <>
      <div className="selectedprof">
        <div className="selectedprof-card">
          <img src={selectprof} alt="" />
          <div className="selecprof-detail">
            <h5>{selProfname}</h5>
            <p>{role}</p>
            <p>{companyName}</p>
            <div className="locat">
              <div className="box">
                <IoLocationSharp />
                <p>{location}</p>
              </div>
              <div className="box">
                <FaBusinessTime />
                <p>{noticeday} Days</p>
              </div>
            </div>
            <div className="selectprof-desc">
              <p>
                We are looking for someone with experience using AI software to
                create realistic product photos for our Etsy shop.
              </p>
            </div>
            <div className="skills">
              <p>{skillOne}</p>
              <p>{skillTwo}</p>
              <p>{skillThree}</p>
            </div>
          </div>
        </div>
        <button>View more</button>
      </div>
    </>
  );
};

export default SelectedProfCard;
