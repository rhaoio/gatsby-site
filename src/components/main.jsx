import React, { Component } from "react";
import Skills from "./skills";
import Personal from "./personal";
import Projects from "./projects";

const MainInfo = () => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      <Personal />
      <Skills />
      <Projects />
    </main>
  );
};

export default MainInfo;
