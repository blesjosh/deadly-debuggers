import React from 'react';
import './Home.css';
import projects from '../assets/SquadProjects.png';
import kalviumSection from '../assets/kalvium-section.png';
import meetsquad from '../assets/meetsquad.jpg';
import quote from '../assets/quote.png';
import gallery from '../assets/gallery.png';
import squad76 from '../assets/Squad76.png';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div id="main">
      <div className="item one" >
        <img src={squad76} className='h-[45%]' alt="" />
      </div>
      {/* <div className="item two">
        <p className='place-content-center'>Blippy 76</p>
        <img className="place-content-center" src={blippyImage} alt="" />
      </div> */}
      <div className="item three">
        <img className='w-[100%] h-[100%]' src={projects} alt="" />
      </div>
      <div className="item four">
        <img src={kalviumSection} className='place-content-center' alt="" />
      </div>
      <div className="item five">
        <Link to={'/member-page'}>
        <img src={meetsquad} alt="" />
        </Link>
        </div>
      <div className="item six">
        <img src={quote} className='h-[120%] ' alt="" />
      </div>
      <div className="item seven">
        <img src={gallery} className='h-[100%]' alt="" />
      </div>

    </div>
  );
};

export default Home;