import React from "react";
import Info from "./info";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import Location from "./location";

//placeholder image
import face from "../images/me.png";

const About = () => {
  const name = "richard hao";
  return (
    <aside className=" w-full lg:w-1/3 lg:border-r border-line lg:px-6 xl:px-12">
      <div className="flex flex-col h-full justify-between">
        <div>
          <h4 className="font-header font-light text-front text-2xl leading-none mb-4">
            Software Developer
          </h4>
          <h4 className="font-header font-light text-front text-1xl leading-none mb-4">
            Game Designer
          </h4>

          <h1 className="font-header font-black text-front text-5xl leading-none break-words mb-6">
            Richard Hao
          </h1>
          <div className="relative inline-block leading-none">
            <div className="relative inline-block leading-none">
              <StaticImage
                src="../images/me.png"
                alt={name}
                placeholder="blurred"
                layout="fixed"
                width={190}
                height={190}
                className="rounded-full relative z-10"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5701f7] to-[#3700ff] bg-lead z-0 transform translate-x-5"></div>
            </div>
          </div>
          <div className="pt-6 pb-12 lg:py-0 my-2">
            <Location></Location>
          </div>
          <div className="font-header font-semibold text-front text-sm uppercase mb-3">
            <Info></Info>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default About;
