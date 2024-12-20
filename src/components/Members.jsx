import React from 'react';
import Akash from '../assets/Members/AiImages/aakash.png';
import Abdullah from '../assets/Members/AiImages/abdu.png';
import Abhinivesh from '../assets/Members/AiImages/abhi.png';
import Ajay from '../assets/Members/AiImages/ajay.png';
import Akshad from '../assets/Members/AiImages/akshad.png';
import Balaji from '../assets/Members/AiImages/balaji.png';
import Joshua from '../assets/Members/AiImages/blessing.png';
import Che from '../assets/Members/AiImages/che.png';
import Deva from '../assets/Members/AiImages/deva.png';
import Dharun from '../assets/Members/AiImages/Dharun.png';
import Harish from '../assets/Members/AiImages/harish.png';
import Jandy from '../assets/Members/AiImages/jandy.png';
import Nandhini from '../assets/Members/AiImages/nandhini.png';
import Idcard from '../assets/Members/id-card.png';
import Pawin from '../assets/Members/AiImages/pawin.png';
import Rahul from '../assets/Members/AiImages/rahul.png';
import Razy from '../assets/Members/AiImages/razy.png';
import Sandy from '../assets/Members/AiImages/sandy.png';
import Sibi from '../assets/Members/AiImages/sibi.png';
import Suba from '../assets/Members/AiImages/suba.png';
import Vignesh from '../assets/Members/AiImages/vignesh.png';
import Vigneshwaren from '../assets/Members/AiImages/vigneshwaren.png';
import Vishal from '../assets/Members/AiImages/vishal.png';

export const Members = () => {
    let details = [
        { name: `Akash`, photo: Akash },
        { name: `Abhinivesh`, photo: Abhinivesh },
        { name: `Akshad`, photo: Akshad },
        { name: 'Abdu', photo: Abdullah },
        { name: 'Joshua', photo: Joshua },
        { name: 'Balaji', photo: Balaji },
        { name: 'Che', photo: Che },
        { name: 'Deva', photo: Deva },
        { name: 'Dharun', photo: Dharun },
        { name: 'Harish', photo: Harish },
        { name: 'Jandy', photo: Jandy },
        { name: 'Nandhini', photo: Nandhini },
        { name: 'Pawin', photo: Pawin },
        { name: 'Rahul', photo: Rahul },
        { name: 'Razy', photo: Razy },
        { name: 'Sandy', photo: Sandy },
        { name: 'Suba', photo: Suba },
        { name: 'Vignesh', photo: Vignesh },
        { name: 'Vigneshwaren', photo: Vigneshwaren },
        { name: 'Vishal', photo: Vishal },
    ];

    return (
        <div>
            <img
                className='ml-[500px] w-[1050px] h-[975px] absolute flex justify-center'
                src={Idcard}
                alt=""
            />
            <div className='px-[200px] py-[200px] flex'>
                <img className='mt-[270px] w-[25%] h-[25%]' src={Ajay} alt="" />
                <img className='mt-[270px] ml-[800px] w-[25%] h-[25%]' src={Sibi} alt="" />
            </div>
            <div className='mx-[280px] rounded-[20px] bg-[#3E1A3B] w-[1450px] h-[2500px]'>
                <div className="grid grid-cols-4  py-0">
                    {details.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img className='w-[500px] h-[500px] object-cover rounded-full'
                                src={member.photo}
                                alt={member.name}
                            />
                            {/* <p className="mt-2 text-center">{member.name}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
