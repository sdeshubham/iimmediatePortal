import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const EmployerPopupCard = ({ fetchUserData, toggleEmployerPopupCardPopup }) => {
  const [formData, setFormData] = useState({
    description: "",
    website: "",
    industry: "",
    companyFullAddress: "",
    founded: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const authToken = Cookies.get("authToken"); // Get token from cookies

    if (!authToken) {
      setError("Session expired! Please login again.");
      return;
    }

    try {
      const response = await axios.put(
        `${baseUrl}/employer/editEmployer`,
        formData,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      if (response.data.status === 200) {
        alert("Employer details updated successfully!");
        fetchUserData();
        toggleEmployerPopupCardPopup();
      } else {
        setError(response.data.message || "Failed to update employer details.");
      }
    } catch (error) {
      setError(
        error.response ? error.response.data.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="empyr-box">
      <div className="empyr-inphead">
        <h3>Company Details</h3>
        <p>
          Empower your team with a visionary company that leads innovation,
          fosters growth, and drives success in every project.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="empyr-inp-box">
        <div className="empyr-inp-fieldbox">
          <label htmlFor="companyDescription">Company Description</label>
          <textarea
            id="companyDescription"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="empyr-inp-fileds comp-desc-empyr"
            placeholder="Company Description"
          />
        </div>
        <div className="empyr-inp-fieldbox">
          <label htmlFor="website">Website URL</label>
          <input
            id="website"
            name="website"
            type="text"
            value={formData.website}
            onChange={handleChange}
            className="empyr-inp-fileds"
            placeholder="Website URL"
          />
        </div>
        <div className="empyr-inp-fieldbox">
          <label htmlFor="industry">Industry</label>
          <input
            id="industry"
            name="industry"
            type="text"
            value={formData.industry}
            onChange={handleChange}
            className="empyr-inp-fileds"
            placeholder="Industry"
          />
        </div>
        <div className="empyr-inp-fieldbox">
          <label htmlFor="companyAddress">Company Address</label>
          <input
            id="companyAddress"
            name="companyFullAddress"
            type="text"
            value={formData.companyFullAddress}
            onChange={handleChange}
            className="empyr-inp-fileds"
            placeholder="Company Address"
          />
        </div>
        <div className="empyr-inp-fieldbox">
          <label htmlFor="foundedYear">Founded Year</label>
          <input
            id="foundedYear"
            name="founded"
            type="text"
            value={formData.founded}
            onChange={handleChange}
            className="empyr-inp-fileds"
            placeholder="Founded Year"
          />
        </div>
        <div className="expInp-btns">
          <div>
            <button className="exp-submitBtn" type="submit">
              Submit
            </button>
            {/* <button
              className="exp-deleteBtn"
              type="button"
              onClick={toggleEmployerPopupCardPopup}
            >
              Cancel
            </button> */}
          </div>
        </div>
      </form>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
    </div>
  );
};

export default EmployerPopupCard;
