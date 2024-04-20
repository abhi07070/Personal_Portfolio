import React, { useState, useRef, useEffect } from "react";
import "./Proficiency.css";
import gif from "../../Images/developer.svg";
import Fade from "react-reveal/Fade";

const FRONTEND_SKILL = "80%";
const BACKEND_SKILL = "90%";
const PROGRAMMING_SKILL = "60%";

const Proficiency = () => {
  const myref = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const [tooltipValues, setTooltipValues] = useState([
    FRONTEND_SKILL,
    BACKEND_SKILL,
    PROGRAMMING_SKILL,
  ]);
  const name = ["FRONTEND", "BACKEND", "PROGRAMMING"];

  const handleTooltipChange = (index, value) => {
    const newTooltipValues = [...tooltipValues];
    newTooltipValues[index] = value;
    setTooltipValues(newTooltipValues);
  };

  const getSkillPerWidth = (value) => {
    const tooltipValueNumber = Number(value.replace("%", ""));
    const defaultWidth = "0%";
    // Set the width to 0% by default
    let width = defaultWidth;
    // If the element is visible, update the width
    if (myElementIsVisible) {
      width = `${tooltipValueNumber}%`;
    }
    return width;
  };

  return (
    <div className="section-lg">
      <div className="container">
        <Fade left>
          <div className="skills-wrap">
            <h1 className="ph1">Proficiency</h1>
            {tooltipValues.map((value, index) => (
              <div className="skill-box" key={index}>
                <span className="title">{name[index]}</span>
                <div className="skill-bar">
                  <span
                    ref={myref}
                    className="skill-per"
                    style={{ width: getSkillPerWidth(value) }}
                  >
                    <span
                      className="tooltip"
                      onClick={(e) =>
                        handleTooltipChange(index, e.target.innerText)
                      }
                    >
                      {value}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Fade>
        <Fade right>
          <div className="image">
            <img src={gif} alt="" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Proficiency;
