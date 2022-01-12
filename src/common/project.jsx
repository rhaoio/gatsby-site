import React from "react";
import ProjectStatus from "./projectstatus";
import Tags from "./tags";
import ProjIcon from "./projecticon";

const Project = ({ name, link, shortLink, description, tags, icon }) => {
  return (
    <div className="bg-gradient-to-r from-zinc-600 to-zinc-600 text-white">
      <div className="border-t-4 border-line border-neutral-50 relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        <div className="lg:flex-1">
          <h4 className="font-bold">{name}</h4>
          <a className="underline" href={link}>
            {shortLink}
          </a>
          <p className="w-full py-4 whitespace-pre-line">{description}</p>
          <ul className="pr-2">
            <ProjectStatus status="live" /> <Tags tags={tags} />
          </ul>
          <ProjIcon icon={icon} />
        </div>
      </div>
    </div>
  );
};

export default Project;
