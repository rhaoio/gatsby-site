import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faEthereum,
  faUnity,
} from "@fortawesome/free-brands-svg-icons";

const Info = () => {
  return (
    <div className="w-auto">
      <div>
        <FontAwesomeIcon icon={faEnvelopeOpen} fixedWidth />
        <a
          className="lowercase border-back px-3"
          href="mailto:rhaogamedesign@gmail.com"
        >
          Email
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faLinkedin} fixedWidth />
        <a
          className="lowercase  border-back px-3 "
          href="https://www.linkedin.com/in/richardhao1995/"
        >
          Linkedin
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub} fixedWidth />
        <a
          className="lowercase border-back px-3"
          href="https://github.com/richardhao1995"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Info;
