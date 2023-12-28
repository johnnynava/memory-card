import { useEffect, useState } from "react";

const cardsArray = [
  "3175",
  "1585",
  "201088",
  "10436",
  "796",
  "8966",
  "41050",
  "793",
  "86835",
  "11104",
  "25508",
  "10835",
];

let fetchedCardsArray;

const checkForDuplicates = (array) => {
  return new Set(array).size !== array.length;
};

export default function Cards() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handlePlayAgain = () => {
    setSelectedCards([]);
    setCurrentScore(0);
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    setCurrentScore(selectedCards.length);
    if (highScore < selectedCards.length) {
      setHighScore(selectedCards.length);
    }
  }, [selectedCards, highScore]);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        console.log("fetching");
        fetchedCardsArray = await Promise.all(
          cardsArray.map(async (card, index) => {
            const fetchedItems = await fetch(
              `https://api.themoviedb.org/3/movie/${card}/images?language=en&api_key=${
                import.meta.env.VITE_TMDB_API_KEY
              }`,
              { mode: "cors" },
            );
            const parsedResponse = await fetchedItems.json();
            return (
              <img
                className="card"
                key={index}
                alt="cards"
                src={
                  "https://image.tmdb.org/t/p/original/" +
                  parsedResponse.posters[0].file_path
                }
                onClick={(e) => {
                  setSelectedCards((prev) => [...prev, e.target.src]);
                  shuffleArray(fetchedCardsArray);
                }}
              ></img>
            );
          }),
        );
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
        shuffleArray(fetchedCardsArray);
      }
    };
    asyncFunc();
  }, []);

  if (isLoading) {
    return (
      <div className="contentLoading">
        <p>Loading...</p>
      </div>
    );
  } else {
    if (selectedCards.length === 12) {
      return (
        <div className="winScreen">
          <div className="gameWon">You won!</div>
          <button className="restartButton" onClick={handlePlayAgain}>
            Play again?
          </button>
        </div>
      );
    } else if (!checkForDuplicates(selectedCards)) {
      return (
        <div className="contentPlaying">
          <div className="scores">
            <span>
              Current Score <p className="score">{currentScore}</p>
            </span>
            <div className="gameTitlePlaying">
              <p>Memory Game</p>
              <p>Film Posters Edition</p>
            </div>
            <span>
              High Score <p className="score">{highScore}</p>
            </span>
          </div>
          <div className="cards">{fetchedCardsArray}</div>;
        </div>
      );
    } else {
      return (
        <div className="loseScreen">
          <div className="gameLost">You lost!</div>
          <button className="restartButton" onClick={handlePlayAgain}>
            Play again?
          </button>
        </div>
      );
    }
  }
}
