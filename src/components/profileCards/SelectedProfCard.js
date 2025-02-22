import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

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
            <p className="selecprof-role">{role}</p>
            <p className="selecprof-compName">{companyName}</p>
            <div className="locat">
              <div className="box">
                <MdOutlineLocationOn color="#727272" />
                <p className="box-p">{location}</p>
              </div>
              <div className="box">
                <IoMdTime color="#727272" />
                <p className="box-p box-pNotice">{noticeday} Days</p>
              </div>
            </div>
          </div>
        </div>
        <div className="selectprof-desc">
          <p>
            We are looking for someone with experience using AI software to
            create realistic product photos for our Etsy shop.
          </p>
        </div>
        <div className="skills">
          <p className="skills-heaad">Skills: </p>
          <p className="skills-set">{skillOne}</p>
          <p className="skills-set">{skillTwo}</p>
          <p className="skills-set">{skillThree}</p>
        </div>
        <a href="/"><button className="profview-more">Visit Profile</button></a>
      </div>
    </>
  );
};

export default SelectedProfCard;