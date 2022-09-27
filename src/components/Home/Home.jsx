import React from "react";
import ParticlesBackground from "../../particles/ParticlesBackground";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
        <ParticlesBackground />
      <h1 className="home--title">
        Welcome to my personal site!.<span>&#160;</span>
      </h1>
    </div>
  );
};

export default Home;
