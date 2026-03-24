import React from "react";
import { FaEnvelopeOpenText, FaGithub, FaLinkedin } from "react-icons/fa6";

const Info = () => {
  return (
    <div className="w-auto">
      <div className="flex items-center gap-3 py-1 text-front">
        <FaEnvelopeOpenText className="h-4 w-4 shrink-0 text-[#7aa2ff]" />
        <a
          className="lowercase"
          href="mailto:rhaogamedesign@gmail.com"
        >
          Email
        </a>
      </div>
      <div className="flex items-center gap-3 py-1 text-front">
        <FaLinkedin className="h-4 w-4 shrink-0 text-[#7aa2ff]" />
        <a
          className="lowercase"
          href="https://www.linkedin.com/in/richardhao1995/"
          rel="noreferrer"
          target="_blank"
        >
          Linkedin
        </a>
      </div>
      <div className="flex items-center gap-3 py-1 text-front">
        <FaGithub className="h-4 w-4 shrink-0 text-[#7aa2ff]" />
        <a
          className="lowercase"
          href="https://github.com/rhaoio"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Info;
