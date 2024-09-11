import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import ContentModal from './ContentModal';


function MovieControls({ movie }) {

    const {removeMovieFromMylist} = useContext(GlobalContext);


  return (
    <div className='moviecontrols-main'>
        <button
        className='moviecontrols-btn'
        onClick={() => removeMovieFromMylist(movie?.id)}
        >
          Remove Watchlist
        </button >
        <ContentModal movieId={movie}>
          <button className='moviecontrols-btn'>More</button>
        </ContentModal>
    </div>
  );
}

export default MovieControls;
