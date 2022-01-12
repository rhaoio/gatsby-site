import React from "react";
import ProjectStatus from "./projectstatus";
import Tags from "./tags";
import ProjIcon from "./projecticon";
import { StaticImage } from "gatsby-plugin-image";

const Project = ({
  name,
  link,
  shortLink,
  description,
  tags,
  icon,
  image,
  status,
}) => {
  return (
    <div className="bg-gradient-to-b from-[#242424] to-[#242424] text-white drop-shadow-lg">
      <div className="border-t-4 border-line border-[#4806ff] relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {image && <StaticImage />}
        <div className="lg:flex-1">
          <h4 className="font-bold">{name}</h4>
          <a className="underline" href={link}>
            {shortLink}
          </a>
          <p className="w-full py-4 whitespace-pre-line">{description}</p>
          <ul className="pr-2">
            <ProjectStatus status={status} /> <Tags tags={tags} />
          </ul>
          <ProjIcon icon={icon} />
        </div>
      </div>
    </div>
  );
};

export default Project;
