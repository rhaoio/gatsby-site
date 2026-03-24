import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Location = () => {
  return (
    <div>
      <div className="inline-flex items-center bg-front bg-[#242424] mt-6 w-auto">
        <span className="text-lead border-r-2 border-back px-3">
          <FaLocationDot className="text-[#3c39ff]" />
        </span>
        <span className="text-back font-header font-bold py-1 px-3 text-lg">
          Tokyo, Japan
        </span>
      </div>

      <div className="text-xs pt-1">
        <span>Open to remote and onsite work</span>
      </div>
    </div>
  );
};

export default Location;
