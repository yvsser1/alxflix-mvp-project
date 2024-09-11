import {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

import BarNavigation from './BarNavigation';
import Footer from './Footer';
import SingleCardMyList from './SingleCardMyList';


function MyList() {

  const {mylist} = useContext(GlobalContext);


  return (
      <div className='mylist'>
        <BarNavigation />
        <div className='mylist-lettering'>
          <h1>My Watchlist</h1>
        </div>
        <div className='mylist-main-container'>
          {mylist.length > 0 ? (
            <div className='mylist-films-container'>
              <div className='mylist-movies-counter'>
                <span>Movies:</span> {mylist.length}
              </div>
              {mylist.map(movie => (
                <SingleCardMyList key={movie.id} movie={movie} type='mylist' />
                 ))}
            </div>
            ) : (
              <h2 className='mylist-empty-list'>Add Movies</h2>
            )}
        </div>  
        <Footer />
      </div>
  );
}

export default MyList;