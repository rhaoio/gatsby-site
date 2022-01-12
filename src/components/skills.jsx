import React from "react";
import Skill from "../common/skill";

const Skills = () => {
  return (
    <div>
      <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
        🔨 Tools I like using
      </h5>
      <ul className="flex flex-wrap pt-2 mb-3 grid-cols-3 gap-4 md:gap-8">
        <Skill skill="React" />
        <Skill skill="Unity" />
        <Skill skill="Ethereum" />
      </ul>
    </div>
  );
};

export default Skills;
