import * as React from "react";
import NavBar from "../components/navbar";
import About from "../components/about";
import Contact from "../components/contact";
import MainInfo from "./../components/main";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Richard Hao's Personal Site</title>
        <meta name="description" content="All about Richard :D" />
        <link rel="canonical" href="https://rhao.io" />
      </Helmet>
      <div className="antialiased bg-back leading-normal font-text text-front text-white bg-gradient-to-b from-[#313131] to-[#1f1f1f]">
        <NavBar></NavBar>

        <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
          <About></About>
          <MainInfo></MainInfo>
        </div>

        <Contact></Contact>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
