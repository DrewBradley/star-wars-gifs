### Star Wars Gifs
Find a random gif associated with a random Star Wars character!

## Technologies
  * Built with React
  * Using data from [swapi](https://swapi.dev/) and [GIPHY](https://developers.giphy.com/)

## Architecture
  * Star Wars Gifs is split into four components: ```App.js```, ```Header.js```, ```GifGetter.js```, ```Footer.js```.
  * ```GifGetter.js``` handles the bulk of the logic with both API fetch requests. When the component mounts it requests data from the ```swapi.dev``` API, and assigns the results to the state of the component. When the button is clicked, a random number is generated, and a character is called from the component's state array. The name associated with said character is then passed into an API call to ```developers.giphy.com```, returning a gif from the search results.
  * ```Header.js``` and ```Footer.js``` display the title and citations respectively.
  * ```App.js``` functions as a table on context where all other components are passed into the display, then rendered in ```index.js```.

## Screenshot
![Mobile View](https://media.giphy.com/media/oRN4jLMJjHdSt4Gc5U/giphy.gif)
