import React, { useState } from "react";
import Slider from "react-slider";
import "../../stylesheets/EmpFilter.css";

const SalaryFilterCard = () => {
  const [salaryRange, setSalaryRange] = useState([20000, 80000]);

  const handleChange = (value) => {
    setSalaryRange(value);
  };

  return (
    <div className="salary-filter-container">
      <Slider
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        min={10000}
        max={100000}
        step={1000}
        value={salaryRange}
        onChange={handleChange}
      />
      <div className="salary-range-values">
        <span>Min: ₹{salaryRange[0]}</span>
        <span>Max: ₹{salaryRange[1]}</span>
      </div>
    </div>
  );
};

export default SalaryFilterCard;
