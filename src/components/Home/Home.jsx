import React from "react";
import ParticlesBackground from "../../particles/ParticlesBackground";
import Typewriter from 'typewriter-effect';
import "./Home.css";

const Home = () => {
  const value = new Typewriter("#typewriter", {
    strings: ["Hello", "World"],
    autoStart: true,
  });

  return (
    <div className="home">
      <ParticlesBackground />
      {/* <h1 className="home--title">
        Welcome to my personal site!.<span>&#160;</span>
      </h1> */}
      <div className="home-title">
        <Typewriter
          options={{
            strings: ["Hi! I'm Kroquetita", "FullStack Developer on React, NextJS, Angular and Node"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
