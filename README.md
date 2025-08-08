# Movie Fight

https://lilimartinez23.github.io/movie-fight/

Movie Fight is a fun web app where you can compare two movies side-by-side to see which one comes out on top. Using the [OMDb API](http://www.omdbapi.com/), the app fetches movie details, displays them in a clean interface, and highlights the winner based on various stats like awards, box office revenue, and ratings.

## Features

- **Search Autocomplete**: Type in a movie title and get instant suggestions using a reusable autocomplete component.
- **Movie Details**: Displays poster, genre, plot, and various stats for each movie.
- **Side-by-Side Comparison**: Compare two movies across:
  - Awards count
  - Box office earnings
  - Metascore
  - IMDb rating
  - IMDb votes
- **Winner Highlighting**: The better-performing movie in each category is highlighted automatically.

## Demo

1. Search for a movie on the **left** side.
2. Search for a movie on the **right** side.
3. Watch as Movie Fight highlights the winner for each stat.

## Technologies Used

- **HTML5** for structure
- **CSS3** with [Bulma](https://bulma.io/) for styling
- **JavaScript (ES6)** for interactivity
- **Axios** for API requests
- **OMDb API** for movie data

## Project Structure

- index.html # Main HTML file
- style.css # Custom styles
- utils.js # Utility functions (e.g., debounce)
- autocomplete.js # Reusable autocomplete component
- main.js # Main application logic

### File Responsibilities

- **`index.html`** – Sets up the layout with two search columns and a tutorial prompt.
- **`style.css`** – Adds custom styling for layout, dropdowns, and notifications.
- **`utils.js`** – Contains a `debounce` function to limit API calls while typing.
- **`autocomplete.js`** – Renders the search bar, dropdown suggestions, and handles item selection.
- **`main.js`** – Fetches movie data from the OMDb API, renders movie details, and runs the comparison logic.

## How It Works

1. **Searching**  
   The autocomplete widget fetches search results from the OMDb API as you type (debounced for performance).

2. **Selecting a Movie**  
   Clicking a result triggers a detailed fetch for that movie, displaying its info and stats.

3. **Comparison**  
   Once two movies are selected, the app compares their numeric stats and visually marks the better values.

## Setup and Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/movie-fight.git
   cd movie-fight
2. Open index.html in your browser.

3. Start comparing movies!

Note: This project uses the OMDb API with an API key included in the code. You may replace it with your own for production use.

## API Reference
OMDb API: http://www.omdbapi.com/
Example endpoints used:
- Search: http://www.omdbapi.com/?apikey=YOUR_KEY&s=SEARCH_TERM
- Movie details: http://www.omdbapi.com/?apikey=YOUR_KEY&i=IMDB_ID
