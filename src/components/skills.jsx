import React from "react";

const Skills = () => {
  const skills = [
    { name: "Solidity", color: "#7c3aed" },
    { name: "Rust", color: "#f97316" },
    { name: "TypeScript", color: "#2563eb" },
    { name: "Unity", color: "#e5e7eb" },
    { name: "Docker", color: "#06b6d4" },
    { name: "PostgreSQL", color: "#3b82f6" },
  ];

  return (
    <div>
      <h5 className="font-header font-semibold text-front text-sm uppercase mb-3 ">
        Tools I like using
      </h5>
      <ul className="grid gap-3 pt-2 mb-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-3 border border-line bg-[#202020] px-4 py-3"
          >
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: skill.color }}
            ></span>
            <span className="font-text text-sm text-front">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
