import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEarth } from "@fortawesome/free-solid-svg-icons";

const Location = () => {
  return (
    <div>
      <div className="inline-flex items-center bg-front bg-black mt-6 w-auto">
        <span className="text-lead border-r-2 border-back px-3">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span>
        <span className="text-back font-header font-bold py-1 px-3 text-lg">
          Sydney, Australia
        </span>
      </div>

      <div className="text-xs pt-1">
        <span className="">🌎 Available for relocation</span>
      </div>
    </div>
  );
};

export default Location;
