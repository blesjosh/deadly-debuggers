import React from 'react';
import Blessing from '../assets/blessing.png';
import Abhi from '../assets/abhi.png';
import Akshad from '../assets/akshad.png';

export const Members = () => {

let details=[
    {
        name:`blessing`,
        photo: Blessing,
    },
    {
        name:`Abhinivesh`,
        photo: Abhi,
    },
    {
        name:`Akshad`,
        photo: Akshad,
    },
 
    

]

  return (
    <div className='grid-cols-4 '>Members
    {
        details.map((Element)=>(
            <img className='w-[20%]' src={Element.photo} alt="" />
        ))
    }
    </div>
  )
}
