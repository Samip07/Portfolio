// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import myImg from "./assets/myImg.JPG";
import "./App.css";

function App() {
  // OpenWeatherMap API but could not use it with vite
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setLatitude(position.coords.latitude);
  //     setLongitude(position.coords.longitude);
  //   });
  // } else {
  //   console.log("Geolocation is not supported by this browser.");
  // }

  // async function getWeather() {
  //   const appid = "caf815c55eabddd1cea90210a1cc9109";
  //   const res = await fetch(
  //     `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${appid}`
  //   );
  //   // const res = await fetch(`https://api.adviceslip.com/advice`);

  //   const data = await res.json();
  //   console.log(data);
  // }

  return (
    <>
      <div className="imgContainer">
        <a href="https://www.linkedin.com/in/samip-poudel7/" target="_blank">
          <img src={myImg} className="logo myImg" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>👋 Welcome to My Portfolio!</h1>
      <div className="card">
        <a
          href="https://docs.google.com/document/d/1qPknPvxOZL9KI5b3A3k2GAgvUHWN3fQQNCtm_BgnoG8/edit?usp=sharing"
          target="_blank"
        >
          <button>View Resume</button>
        </a>
        <p>
          I’m a passionate MERN Stack Developer crafting dynamic, user-friendly
          web applications. Dive in to explore my projects, skills, and the
          journey that turns ideas into impactful digital experiences. Let’s
          build something amazing together! 🚀
        </p>
      </div>
      <p className="read-the-docs">Thank you for the visit!😄</p>
    </>
  );
}

export default App;
