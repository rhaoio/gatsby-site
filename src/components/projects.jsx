import React from "react";
import Project from "../common/project";

const Projects = () => {
  return (
    <div>
      <h2 className="font-header font-semibold text-front uppercase ">
        Projects
      </h2>

      <div className="py-2">
        <Project
          name="ZKCross - Zero-knowledge Proof Cross-chain Bridge"
          link="https://zkcross.org"
          shortLink="ZKCross"
          description="A cross-chain bridge that uses zero-knowledge proofs to transfer assets across various blockchains. The bridge is built on top of the ZKWasm technology and AMM to provide liquidity for the bridge. The bridge is currently in the testing phase and is being used to transfer assets on several testnets."
          tags={["Ethereum", "Solidity", "React"]}
          icon={["eth", "react"]}
          status="In development"
        />
        <Project
          name="Archon Labs"
          link=""
          shortLink=""
          description="Running my own business to support and develop various web applications and games."
          tags={["React", "Unity", "Node.js"]}
          icon={["react", "unity"]}
          status="Still alive"
        />
        <Project
          name="O.R Workflow Dashboard"
          link=""
          shortLink=""
          description="Creating a dashboard for hospital staff to visualise previous and upcoming schedules in relation to surgery setups. Has cards to display various coloured information based on surgical status, and several filtering options to display selected data."
          tags={["React", "Node.js"]}
          icon={["react"]}
          status="In development"
        />
        <Project
          name="Boba Bao"
          link="https://play.google.com/store/apps/details?id=com.FiveHeadGames.BobaBao"
          shortLink="Google Play"
          description="A simple endless runer style game created with Unity where I created some animations, utilised the In App purchases and deployed to the Google Play store."
          tags={["Unity", "C#", "Android"]}
          icon={["unity"]}
          status="live"
        />
        <Project
          name="NFT Minting site"
          link="https://pacific-sands-13311.herokuapp.com/"
          shortLink="pacific-sands-13311.herokuapp.com"
          description="A simple front-end and smart contract system to randomly generate/mint simple text-based NFTs onchain. Front end is deployed on heroku. Smart contracts live on the Rinkeby Testnet. "
          tags={["Solidity", "Ethereum", "React"]}
          icon={["eth", "react"]}
          status="live"
        />
        <Project
          name="Solidity Web App"
          link="https://waveportal-starter-project.chard1.repl.co"
          shortLink="waveportal-starter-project.chard1.repl.co"
          description="The first Solidity and React project complete with the assistance of @buildspace. Store your message onchain and also have a random chance of receiving some free Eth."
          tags={["Solidity", "Ethereum", "React"]}
          icon={["eth", "react"]}
          status="live"
        />
      </div>
    </div>
  );
};

export default Projects;
