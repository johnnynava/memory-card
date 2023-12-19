import { useState, useEffect } from "react";

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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        fetchedCardsArray = await Promise.all(
          cardsArray.map(async (card, index) => {
            const fetchedItems = await fetch(
              `https://api.themoviedb.org/3/movie/${card}/images?language=en&api_key=0f799d1a5d6272d00905b33706caf83b`,
            );
            const parsedResponse = await fetchedItems.json();
            return (
              <img
                className="card"
                key={index}
                src={
                  "https://image.tmdb.org/t/p/original/" +
                  parsedResponse.posters[0].file_path
                }
              ></img>
            );
          }),
        );
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
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
  } else
    return (
      <div className="contentPlayScreen">
        <div className="gameTitle">
          <p>Memory Game</p>
          <p>Movie Posters Edition</p>
        </div>
        <button className="playButton">Play!</button>
        {/* <div className="cards">{fetchedCardsArray}</div> */}
      </div>
    );
}

export default App;
