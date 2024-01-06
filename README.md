# Memory Game: Film Posters Edition
[Live Preview](https://johnnynava.github.io/memory-card/)
![desktop](https://github.com/johnnynava/memory-card/assets/137064281/720f5438-fbcd-4829-a85c-309388c6d6e2)
Memory Card game but it's film posters - you win by choosing 12 different posters in a row. If you choose a poster that you picked before then you lose. 
<br>

The application tracks the highest score.

## Primary technologies used
• React.js
<br>
• TMDb's API
<br>
• React Testing Library
<br>
• CSS

## Other technologies/tools used
• Vite
<br>
• Vitest
<br>
• Prettier
<br>
• ESLint

## Comments
I already understood the concept of asynchronous functions on simpler projects because of [some of my previous work](https://github.com/johnnynava/weather-app) but this really put me to the test on how to use asynchronous functions in React along with the useEffect hook.
<br>
<br>
This project was also great as it was the first I decided to use the React Testing Library on and some of those tests are asynchronous as well.
<br>
<br>
I chose 12 movies to make the selection for and I retrieve the images and information using tmdb's api. I could have programmed this to choose ANY movie instead of 12 preselected ones but the problem with this is that TMDb doesn't have any endpoint for random movies. I could workaround this but the database also contains adult movies (I don't want this website to potentially display anything inaproppriate) and there's some very niche movies with low quality posters that I didn't want to be featured in my page.
