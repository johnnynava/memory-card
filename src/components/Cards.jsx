function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//problems:
// need opening page that will have a play button and after clicking on play display the cards. (call Card Component?)
// need function to shuffle array of cards - solved with the Durstenfeld shuffle
//need to run shuffle array everytime the user picks a card and when the user clicks play for the first time
//create a selectedCardsArray and send all the selected cards to it (initialize it empty)
//when a user picks a card, compare the selectedCardsArray with the picked card (what method?) to see if the card has been picked before
//if picked before, lose. if not, continue.
//after a user picks a card, if the selectedcardsarray.length is 12 then display win
//need to display currentScore (useState) which will be updated everytime the user picks a card
//need to display highScore (useState) which will be compared with the currentScore everytime the user picks a card (if the user picks a correct card and the score is equal then update it to be the currentScore)
//create both of those useStates on App.jsx and pass them to the card component
//pass a isNewGame boolean prop to the card to determine whether it should start a new game or not
//need you won page in case the user chooses 12 correct posters in a row (include a restart button to start process from zero)
//need you lost page in case the user loses (include restart button to start process from zero)
//create restart button that restarts game from zero (keep highScore and reset currentScore too)

//after everything functions:
//make effect of the cards to transition to back image and then display the new values
//implement env variable
//decorate everything (a backgrounda and pretty buttons)
//implement function to display random movies instead of preselected ones? this will imply using the following: https://developer.themoviedb.org/reference/movie-latest-id
//and also query for another random number in case the response is not a 200 (there are some cases in which you could hit a deleted id)
//"hide" api key

//NOTES:
//check if there is a better way to do the useEffect function to fetch the cards
