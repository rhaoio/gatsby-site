import React from "react";
import { FaReact, FaGithub, FaUnity, FaEthereum } from "react-icons/fa";

const ProjIcon = ({ icon }) => {
  const iconStyle = "w-6 h-6 inline";

  const getIcon = (_icon) => {
    if (_icon === "unity") {
      return <FaUnity className={iconStyle} />;
    } else if (_icon === "github") {
      return <FaGithub className={iconStyle} />;
    } else if (_icon === "react") {
      return <FaReact className={iconStyle} />;
    } else if (_icon === "eth") {
      return <FaEthereum className={iconStyle} />;
    }
  };
  return (
    <span className={`absolute right-0 bottom-0 mb-5 mr-5 text-back`}>
      {icon.map((i) => getIcon(i))}
    </span>
  );
};

export default ProjIcon;
