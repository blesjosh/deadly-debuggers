import React from 'react';
import Galleryimage from '../assets/Gallery/Galleryimages.png';

const gallery = () => {
  return (
    <div>
      <img src={Galleryimage} draggable='false' className='w-full ' alt="" />
    </div>
  )
}

export default gallery