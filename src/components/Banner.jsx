import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import ContentModal from './ContentModal';


function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {

        async function getData() {
            
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`, {
                    method: 'GET',
                });
    
                if (response.ok) {
                    const data = await response.json();
                    setMovie(data?.results[Math.floor(Math.random() * data?.results.length)]);
                } else {
                    throw new Error(response.statusText);
                }
            } catch (error) {
                console.error(error);
            }
        }
    
        getData();
    }, []);

    //console.log(movie);

    // limiting the amount of text in a div to n characters - see below
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }


    //global context - mylist stored movies

    const { addMovieToMylist, mylist } = useContext(GlobalContext);

    let storedMovie = mylist.some(o => o.id === movie?.id && movie?.id !== undefined);

    const mylistDisabled = storedMovie ? true : (movie?.id === undefined) ? true : false;


    const image = movie?.backdrop_path !== undefined && movie?.backdrop_path !== null;
    //console.log(image);


  return (
    <header className='banner'
        style={{
            backgroundSize: 'cover',
            backgroundImage: image ? (`url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`
            ) : (
            '$main-app-color'),
            backgroundPosition: 'top center',
        }}
    > 
        <div className='banner-contents'>
            <h1 className='banner-title'>{movie?.title || movie?.original_title}</h1>
            <div className='banner-btns'>
                <button 
                className='banner-btn'
                disabled={mylistDisabled}
                onClick={() => addMovieToMylist(movie)}
                >
                    Add to Watchlist
                </button>
                <ContentModal movieId={movie}>
                    <button className='banner-btn'>More!</button>
                </ContentModal>
            </div>
            <h1 className='banner-description'>{truncate(movie?.overview, 180)}</h1>
        </div>
        <div className='banner-fadeBottom'></div> 
    </header>
  );
}

export default Banner;