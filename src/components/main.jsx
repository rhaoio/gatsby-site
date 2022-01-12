import React, { Component } from "react";
import Skills from "./skills";
import Personal from "./personal";
import Projects from "./projects";
import ContactForm from "./contactform";

const MainInfo = () => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12  ">
      <Personal />
      <Skills />
      <Projects />
      <ContactForm />
    </main>
  );
};

export default MainInfo;
