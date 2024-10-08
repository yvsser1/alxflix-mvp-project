import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import NavBarM from './NavBarM';


function BarNavigation () {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    useEffect(() =>{
        //nazwa dla funkcji żeby nie była anonimowa wtedy można prawidłowo użyć remove listenera
        const scrollListener = () => {
            if (window.scrollY > 100) {
                setShow(true); 
            } else setShow(false);
        }

        window.addEventListener('scroll', scrollListener);
        return () => window.removeEventListener('scroll', scrollListener);
        
    }, []);


    const handleNavigateToSearch = () => {

        navigate('/search');
        return;
    }

    const handleNavigateHome = () => {

        navigate('/');
      return;
    }

    const handleNavigateMyList = () => {

        navigate('/mylist');
      return;
    }

    //selecting the current page in nav bar with color for btns
    
    //console.log(window.location.pathname);
    const pathname = window.location.pathname;
    
    const paths = ['/', '/mylist', '/search'];

    const currentPage = paths.map(path => pathname === path);

    
    const color_1 = 'linear-gradient(233.25deg,#4d3fe9,#f13d30)';
    const color_2 = 'rgba(21, 21, 42, 0.3)';

    return (
        <div className={`nav-main-container ${show && 'nav-black'}`}>
            <div className="nav-left-icons">
                <h1 className="nav-logo"><Link to='/' className='logo-link'>ALX<span>F</span><span>lix</span></Link></h1>
                <button 
                onClick={handleNavigateHome} 
                className="nav-left-icon nav-btns"
                style={{ backgroundImage: currentPage[0] ? color_1 : color_2}}
                >
                    Home
                </button>
                <button 
                onClick={handleNavigateMyList} 
                className="nav-left-icon nav-btns"
                style={{ backgroundImage: currentPage[1] ? color_1 : color_2}}
                >
                    My Watchlist
                </button>
            </div>
            <div className="nav-right-icons">
                <button 
                onClick={handleNavigateToSearch} 
                className="nav-btn-search nav-btns"
                style={{ backgroundImage: currentPage[2] ? color_1 : color_2}}
                >
                    {/* tu jest ikonka lupka */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 0 512 512" style={{fill: 'white'}}>
                    {/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </button>
                <h3 className="nav-hello">Welcome!</h3>
            </div>
            <NavBarM />
        </div>
    );
}

export default BarNavigation;