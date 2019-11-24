import React from "react";
import ReactPlayer from "react-player";
import { navigate } from "@reach/router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/embed/-ihORv-FaPY"
          playing
          onEnded={() =>
            navigate(
              "https://www.clickfam.com/cl.php?id=0ef1f254c9bb1110fe2aa9b805293881"
            )
          }
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
