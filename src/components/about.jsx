import React from "react";
import Info from "./info";
import { StaticImage } from "gatsby-plugin-image";
import Location from "./location";

//placeholder image
import face from "../images/face.png";

const About = () => {
  return (
    <aside className="w-full lg:w-1/3 lg:border-r border-line lg:px-6 xl:px-12">
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
                src="../images/face.png"
                alt="face"
                placeholder="blurred"
                layout="fixed"
                width={170}
                height={170}
                className="rounded-full relative z-10"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-[#a200ff] bg-lead z-0 transform translate-x-5"></div>
            </div>
          </div>
          <div className="pt-8 pb-12 lg:py-0 my-4">
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
