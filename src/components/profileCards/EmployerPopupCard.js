import React from "react";

const EmployerPopupCard = () => {
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
              type="text"
              placeholder="Company Description"
            />
          </div>
          <div className="empyr-inp-fieldbox">
            <label htmlFor="">Website url</label>
            <input
              className="empyr-inp-fileds"
              type="text"
              placeholder="Website url"
            />
          </div>
          <div className="empyr-inp-fieldbox">
            <label htmlFor="">Industry</label>
            <input
              className="empyr-inp-fileds"
              type="text"
              placeholder="Industry"
            />
          </div>
          <div className="empyr-inp-fieldbox">
            <label htmlFor="">Contact number</label>
            <input
              className="empyr-inp-fileds"
              type="number"
              placeholder="Contact number"
            />
          </div>
          <div className="empyr-inp-fieldbox">
            <label htmlFor="">Company Address</label>
            <input
              className="empyr-inp-fileds"
              type="text"
              placeholder="Company Address"
            />
          </div>
          <div className="empyr-inp-fieldbox">
            <label htmlFor="">Founded year</label>
            <input
              className="empyr-inp-fileds"
              type="text"
              placeholder="Founded year"
            />
          </div>
        </div>
        <div className="expInp-btns">
          <div>
            <button className="exp-deleteBtn" type="button">
              Delete
            </button>
            <button className="exp-submitBtn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerPopupCard;
