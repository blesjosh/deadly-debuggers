import React from 'react';
import './Home.css';
import projects from '../assets/Homepage/SquadProjects.png';
import kalviumSection from '../assets/Homepage/kalvium-section.png';
import meetsquad from '../assets/Homepage/meetsquad.jpg';
import quote from '../assets/Homepage/quote.png';
import gallery from '../assets/Homepage/gallery.png';
import squad76 from '../assets/Homepage/Squad76.png';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div id="main">
      <div className="item one" >
        <img draggable='false' src={squad76} className='h-[45%]' alt="" />
      </div>
      {/* <div className="item two">
        <p className='place-content-center'>Blippy 76</p>
        <img className="place-content-center" src={blippyImage} alt="" />
      </div> */}
      <div className="item three">
        <img draggable='false' className='w-[100%] h-[100%]' src={projects} alt="" />
      </div>
      <div className="item four">
        <img draggable='false' src={kalviumSection} className='place-content-center' alt="" />
      </div>
      <div className="item five">
        <Link to={'/member-page'}>
        <img draggable='false' src={meetsquad} alt="" />
        </Link>
        </div>
      <div draggable='false'className="item six">
        <img draggable='false'src={quote} className='h-[120%] ' alt="" />
      </div>
      <div className="item seven">
        <Link to={'/gallery'}>
        <img draggable='false' src={gallery} className='ml-[0px] h-[100%] w-[100%] flex ' alt="" />
        </Link>
      </div>

    </div>
  );
};

export default Home;