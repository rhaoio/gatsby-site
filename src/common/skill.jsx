import React from "react";
//IMPORT ALL PICTURES AND FAICONS

import { FaReact, FaEthereum, FaUnity } from "react-icons/fa";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/skill.css";

const iconSize = "5x";

const skillNameStyling = "py-2 text-center font-bold";

const Skill = ({ skill }) => {
  const getSkill = (_skill) => {
    if (_skill === "React") {
      return (
        <div>
          <svg width="0" height="0">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#00e0fd" offset="0%" />
              <stop stopColor="#0076fd" offset="100%" />
            </linearGradient>
          </svg>
          <FaReact size="125" style={{ fill: "url(#blue-gradient)" }} />
          {/* <FontAwesomeIcon
            className="react-icon"
            icon={faReact}
            size={iconSize}
          /> */}
          <div className={skillNameStyling}>React</div>
        </div>
      );
    } else if (_skill === "Ethereum") {
      return (
        <div>
          <svg width="0" height="0">
            <linearGradient
              id="silver-gradient"
              x1="0%"
              y1="150%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#ffffff" offset="0%" />
              <stop stopColor="#2b2a2a" offset="100%" />
            </linearGradient>
          </svg>
          <FaEthereum size="125" style={{ fill: "url(#silver-gradient)" }} />
          <div className={skillNameStyling}> Solidity</div>
        </div>
      );
    } else if (_skill === "Unity") {
      return (
        <div>
          <svg width="0" height="0">
            <linearGradient
              id="white-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#ffffff" offset="0%" />
              <stop stopColor="#ffffff" offset="100%" />
            </linearGradient>
          </svg>
          <FaUnity size="125" style={{ fill: "url(#white-gradient)" }} />
          <div className={skillNameStyling}>Unity</div>
        </div>
      );
    }
    return (
      <div className="relative inline-block leading-none">
        Error No Skill Found
      </div>
    );
  };

  return (
    <li className="relative inline-block leading-none px-3">
      {getSkill(skill)}
    </li>
  );
};

export default Skill;
