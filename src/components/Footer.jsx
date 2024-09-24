import React from 'react'
import IconFacebook from './IconFacebook';
import IconInstagram from './IconInstagram';
import IconTikTok from './IconTikTok';
import LogoTmdb from './LogoTmdb';


function Footer() {


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logos">
          <div className="footer-logo-1">
            <LogoTmdb />
          </div>
          <div className="footer-logo-2">
            <h1 className="footer-logo-movieon">
              ALX<span>F</span><span>lix</span>
            </h1>
          </div>
        </div>
        <div className="footer-descriptions">
        <p>Track your favorite movies and discover new ones with our app, Tracking Made Easy.</p>
          <p>
            ALXFlix uses the TMDB API but is not endorsed nor
            certified by TMDB.@2024
          </p>
        </div>
        <div className="footer-socialIcons">
          <a
            href="https://github.com/yvsser1"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <IconFacebook />
          </a>
          <a
            href="https://www.x.com/eazyyas"
            target="_blank"
            rel="noreferrer"
            title="X/Twitter"
          >
            <IconInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/yvsser1"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <IconTikTok />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        Made with ☕ By<span> &copy;Yasser Dalouzi</span>
      </div>
    </footer>
  );
}

export default Footer;