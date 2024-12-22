import React, { useState } from 'react';

const MemberCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-[500px] h-[500px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Regular Image */}
      <img draggable='false'
        src={member.photo}
        alt={member.name}
        className="w-full h-full rounded-full object-cover group-hover:opacity-0 transition-all duration-300"
      />
      
      {/* Hover Card */}
      {isHovered && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[350px] h-[430px] bg-white rounded-[30px] shadow-xl z-10">
          <div className="flex flex-col items-center justify-center h-full p-8">
            {/* Hover Photo */}
            <img draggable='false'
              src={member.hoverPhoto || member.photo}
              alt={`${member.name} hover`}
              className="w-[200px] h-[200px] rounded-lg object-cover mb-6"
            />
            
            {/* Name */}
            <h3 className="text-[30px] font-bold text-gray-800 mb-6">{member.name}</h3>
            
            {/* Social Links */}
            <div className="flex flex-col gap-4">
              {/* LinkedIn Button */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                {/* LinkedIn Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.966 0-1.75-.786-1.75-1.75s.784-1.75 1.75-1.75 1.75.786 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.3h-3v-5.5c0-1.372-.028-3.137-1.909-3.137-1.912 0-2.207 1.495-2.207 3.037v5.6h-3v-10h2.89v1.362h.041c.403-.761 1.391-1.562 2.863-1.562 3.063 0 3.627 2.016 3.627 4.633v5.567z"/>
                </svg>
                LinkedIn
              </a>

              {/* GitHub Button */}
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-300"
              >
                {/* GitHub Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.58 0-.287-.01-1.044-.015-2.049-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.304 3.494.997.108-.776.418-1.304.76-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.231.957-.266 1.984-.399 3.004-.404 1.02.005 2.047.138 3.004.404 2.292-1.553 3.3-1.231 3.3-1.231.653 1.653.242 2.874.118 3.176.77.841 1.235 1.911 1.235 3.221 0 4.61-2.804 5.623-5.475 5.92.43.372.815 1.105.815 2.227 0 1.609-.015 2.908-.015 3.296 0 .322.192.698.8.581 4.765-1.589 8.2-6.086 8.2-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberCard;
