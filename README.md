ALXFlix🎥🍿 is an MVP portfolio project part of the ALX SE Program, its a movie tracking website similar to IMDB and Letterboxed & Trackt, it uses the api from <a href="https://developer.themoviedb.org/docs/getting-started" target="_blank" rel="noreferrer" rel="noopener"> TheMovieDb API </a>, recommends new movies and the most popular films and series rated by TMDB users.
ALXFLIX allows users to search for favorite & Trending movies/series, view ratings, see posters, watch trailers and read descriptions, Users can easily add movies to their wishlist for future viewing.

➡️ Project Link: Soon


## Screenshots

<div align="center"> 
  <img src="https://i.postimg.cc/QxPsBxwt/Screenshot-2024-09-11-135701.png" alt="screenshot" />
  <img src="https://i.postimg.cc/D0RvKvK8/Screenshot-2024-09-11-135718.png" alt="screenchot>" />
</div>


## About the Project

# ALXFlix

I created **ALXFlix** primarily as a learning experience to improve my ability to communicate with API databases, practice fetching data, and dive deeper into JavaScript promises. My goal was to challenge myself by building a large-scale project using React.js independently.

However, **ALXFlix** became much more than just a learning project. I focused on making it both user-friendly and visually appealing. The platform not only showcases the newest and top-rated movies or series, but it also features a customizable **My List**, allowing users to save content based on their preferences. This list is stored using LocalStorage, ensuring that saved data remains intact across browser sessions without an expiration date.

To bring **ALXFlix** to life, I utilized:

- **React.js components** for structuring the app
- **SCSS** for responsive styling
- **Vite** for build optimization
- **Context API** to manage global state
- **LocalStorage** for persistent data storage in **My List**
- **Styled Components** (via npm) for dynamic carousels on the homepage
- **Material UI** to create modals with detailed descriptions of each movie/series, including links to trailers on YouTube


## Table of Contents
- [About the project](#about-the-project)
- [Usage](#usage)
- [Technologies and Tools Used](#technologies-and-tools-used)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)


## Usage

**ALXFlix** offers the following features to enhance the user experience:

1. **Find a Movie**: Browse through the latest and top-rated movies or series using the easy-to-navigate homepage.
2. **Watch Trailers**: Click on any movie or series to view detailed information, including a link to its trailer on YouTube, within a sleek modal popup.
3. **Save to My List**: Save your favorite movies or series to the **My List** section for easy access. This feature uses LocalStorage to ensure your saved items are persistent across sessions.
4. **Discover More**: After saving a movie, continue exploring the vast library of content, searching for the next title to enjoy.

All of these features are designed to give users a seamless and enjoyable experience while browsing through their favorite content🎬🎞


## Technologies and Tools Used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) 

![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

**LocalStorage**

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)


## Setup

This project uses npm as package manager

```bash
  npm install
```
To run locally
clone the project

```bash
  git clone https://github.com/yvsser1/alxflix-mvp-project
```

Go to the project directory

```bash
  cd alxflix-mvp-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

in your .env file add the is variable

`VITE_API_KEY=`

you need to go to [TheMovieDB API](https://developer.themoviedb.org/reference/intro/getting-started) and get your own API key to get started


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Acknowledgements

- [Vite](https://vitejs.dev/)
- [TMDB](https://www.themoviedb.org/)
- [MUI](https://mui.com/)
- [npm react-multi-carousel](https://www.npmjs.com/package/react-multi-carousel)
- [Netlify](https://www.netlify.com/)
