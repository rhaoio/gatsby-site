import React from "react";
import Project from "../common/project";

const Projects = () => {
  return (
    <div>
      📌 Projects
      <div className="py-2">
        <Project
          name="Boba Bao"
          link="https://play.google.com/store/apps/details?id=com.FiveHeadGames.BobaBao"
          shortLink="Google Play"
          description="A game created with Unity."
          tags={["Unity", "C#", "Android"]}
          icon="unity"
        />
        <Project
          name="NFT Minting site"
          link="https://pacific-sands-13311.herokuapp.com/"
          shortLink="pacific-sands-13311.herokuapp.com"
          description="A simple front-end and smart contract system to randomly generate/mint simple text-based NFT's onchain. Front end is deployed on heroku. "
          tags={["Solidity", "Ethereum", "Node.js"]}
          icon="eth"
        />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
