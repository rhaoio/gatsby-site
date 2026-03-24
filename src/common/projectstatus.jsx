import React from "react";

const ProjectStatus = ({ status }) => {
  const normalizedStatus = status.toLowerCase();
  const isLive = normalizedStatus === "live";
  const isSunset = normalizedStatus === "sunset";

  return (
    <li
      className={`inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border ${
        isSunset
          ? "border-[#f59e0b] bg-[#3a1f12] text-[#ffd7a3]"
          : "border-back"
      }`}
    >
      <span
        className={`inline-block w-2 h-2 rounded-full mr-2 ${
          isLive ? "bg-green-500 animate-pulse" : isSunset ? "bg-[#fb923c]" : "bg-orange-500"
        }`}
      ></span>
      Status: {status}
    </li>
  );
};

export default ProjectStatus;
