import React, { useState } from "react";
import "./Aboutme.css";

const Abouteme = () => {
  const [watchHobbies, setWatchHobbies] = useState(false);

  const eventClick = (value) =>
    value === false ? setWatchHobbies(true) : setWatchHobbies(false);

  console.log(watchHobbies);
  return (
    <div className="aboutme">
      <video loop autoPlay muted className="aboutme--video">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <h2 className="aboutme--title">
        Hi!🤚my name is "Sergio" alias: <span>Kroquetita</span>
      </h2>
      <p>I´m graduated in. . .</p>
      <p>Application Web Development ("DAW")</p>
      <p>Development of Aplications Cross-plaftform ("DAM")</p>
      <p>
        FullStack Development in <span>Neoland</span>
      </p>
      <button className="aboutme--btn" onClick={() => eventClick(watchHobbies)}>
        Hobbies
      </button>
      {watchHobbies === true ? (
        <div className="aboutme--hobbies">
          <p>
            🌱 I’m currently learning Web Development and other programming
            languages for funny and entertaiment
          </p>
          <p>⚡ Food and Music🎵 are the reasons to live.</p>
          <p>Cars tunning and racing cars🚗</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Abouteme;
