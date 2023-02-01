import React, { Component } from "react";

const Personal = () => {
  return (
    <div className="">
      <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
        About
      </h5>
      <div className="font-text text-sm pb-10 leading-normal whitespace-pre-line">
        <span className="block pb-3">
          Working at&nbsp;
          <a
            href="https://github.com/DelphinusLab"
            target="blank"
            style={{ textDecoration: "underline" }}
          >
            Delphinus Lab
          </a>
          &nbsp;as a Research Engineer. Developing and furthering zero-knowledge
          proof technology.
        </span>
        <span className="block pb-3">
          Building useful and productive applications that people will enjoy
          using. Always looking for opportunities to contribute to awesome
          businesses and projects that people find helpful and practical. Always
          learning new technologies and tools, currently looking at Rust, Unity
          and further Game Development. Enjoy reading about AI and blockchain
          developments, hope to create an awesome product with these
          technologies.
        </span>

        <span className="block pb-3">
          I also love playing and making games. OSRS, TFT/League, Rocket League
          and CSGO. New Unity RPG game in the works as well. Previously worked
          for PlayAGS as a Game Designer with several successful games made and
          now looking to create cool software.
        </span>
      </div>
    </div>
  );
};

export default Personal;
