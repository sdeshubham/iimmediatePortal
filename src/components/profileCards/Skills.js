import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Skills = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "Tailwind CSS",
    "Redux",
    "Java",
    "Python",
    "Ruby",
  ];

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    if (inputValue) {
      const filtered = skills.filter((skill) =>
        skill.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSkills(filtered);
      setIsDropdownVisible(true);
    } else {
      setFilteredSkills([]);
      setIsDropdownVisible(false);
    }
  };

  const handleSuggestionClick = (skill) => {
    setQuery(skill);
    setFilteredSkills([]);
    setIsDropdownVisible(false);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".search-container")) {
      setIsDropdownVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Skills:", skills);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button className="close-btn" onClick={onClose}>
          <IoMdClose size={24} />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="skill-inpbox">
            <div className="skills-inphead">
              <h3>Skills</h3>
              <p>
                Mention skills like programming languages softwares and more, to
                show your technical expertise
              </p>
            </div>
            <div className="skills-inp">
              <label htmlFor="skills">Skills/software name</label>
              <div className="search-container">
                <input
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  placeholder="Search skills..."
                  className="form-control"
                />
                {isDropdownVisible && filteredSkills.length > 0 && (
                  <ul>
                    {filteredSkills.map((skill, index) => (
                      <li
                        key={index}
                        onClick={() => handleSuggestionClick(skill)}
                        style={{
                          padding: "8px",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#f1f1f1")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "white")
                        }
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
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
        </form>
      </div>
    </div>
  );
};

export default Skills;
