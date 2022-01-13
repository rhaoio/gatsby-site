import React, { Component } from "react";
import Skills from "./skills";
import Personal from "./personal";
import Projects from "./projects";
import ContactForm from "./contactform";

const MainInfo = () => {
  return (
    <main className=" lg:w-2/3 lg:pl-8 xl:pl-12  ">
      <div className="bg-gradient-to-b from-[#1b1b1b] to-[#1b1b1b] drop-shadow-xl">
        <div className="px-4 py-4 ">
          <Personal />
          <Skills />
          <Projects />
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default MainInfo;
