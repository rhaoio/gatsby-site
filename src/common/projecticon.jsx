import React from "react";
import { FaReact, FaGithub, FaUnity, FaEthereum } from "react-icons/fa";

const ProjIcon = ({ icon }) => {
  const getIcon = (_icon) => {
    if (_icon === "unity") {
      return <FaUnity className="w-6 h-6" />;
    } else if (_icon === "github") {
      return <FaGithub className="w-6 h-6" />;
    } else if (_icon === "react") {
      return <FaReact className="w-6 h-6" />;
    } else if (_icon === "eth") {
      return <FaEthereum className="w-6 h-6" />;
    }
  };
  return (
    <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back">
      {getIcon(icon)}
    </span>
  );
};

export default ProjIcon;
