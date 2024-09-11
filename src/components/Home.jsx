import BarNavigation from "./BarNavigation";
import Banner from "./Banner";
import Row from "./Row";
import Footer from "./Footer";


function Home() {

  return (
    <div className="home-main-container">
      <BarNavigation />
      <Banner />
      <Row
        title="Popular Movies"
        fetchUrl={
          `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`
        }
        isLargeRow
        isFilm
      />
      <Row
        title="Trending Movies"
        fetchUrl={`https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}`}
        isFilm
        isSerial
      />
      <Row
        title="Upcoming Movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`}
        isFilm
      />
      <Row
        title="Top Rated Movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`}
        isFilm
      />
      <Row
        title="Popular TV Shows"
        fetchUrl={`https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_API_KEY}`}
      />
      <Row
        title="Top Rated TV Shows"
        fetchUrl={`https://api.themoviedb.org/3/tv/top_rated?api_key=${import.meta.env.VITE_API_KEY}`}
      />
      <Footer />
    </div>
  );
}

export default Home;
