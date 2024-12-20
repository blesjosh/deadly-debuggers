import React from 'react';
import one from '../assets/Gallery/1.jpg';
import two from '../assets/Gallery/2.jpg';
import three from '../assets/Gallery/3.jpg';
import four from '../assets/Gallery/4.jpg';
import five from '../assets/Gallery/5.jpg';
import six from '../assets/Gallery/6.jpg';
import seven from '../assets/Gallery/7.jpg';

const images = [one, two, three, four, five, six, seven];

const Gallery = () => {
  return (
    <div className="p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">Squad Gallery</h1>
      
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="w-[100%] h-[100%] rounded-lg shadow-lg object-cover mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
