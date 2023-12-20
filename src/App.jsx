import { useState } from "react";
import Cards from "./components/Cards";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  if (isPlaying === true) {
    return <Cards></Cards>;
  } else
    return (
      <div className="contentPlayScreen">
        <div className="gameTitle">
          <p>Memory Game</p>
          <p>Film Posters Edition</p>
        </div>
        <button className="playButton" onClick={() => setIsPlaying(true)}>
          Play!
        </button>
      </div>
    );
}

export default App;
