import React from "react";

const ProjectStatus = ({ status }) => {
  return (
    <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
      <span
        className={`inline-block w-2 h-2 rounded-full mr-2 ${
          status === "live" ? "bg-green-500 animate-pulse" : "bg-orange-500"
        }`}
      ></span>
      Status: {status}
    </li>
  );
};

export default ProjectStatus;
