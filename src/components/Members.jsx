import React from 'react';
import MemberCard from './MemberCard';
import Idcard from '../assets/Members/id-card.png';
import Ajay from '../assets/Members/AiImages/ajay.png';
import Sibi from '../assets/Members/AiImages/sibi.png';
import Akash from '../assets/Members/AiImages/aakash.png';
import AkashHover from '../assets/Members/pics/aakashHover.png';
import Abdullah from '../assets/Members/AiImages/abdu.png';
import AbdullahHover from '../assets/Members/pics/abduHover.png';
import Abhinivesh from '../assets/Members/AiImages/abhi.png';
import AbhiniveshHover from '../assets/Members/pics/abhiHover.png';
import Akshad from '../assets/Members/AiImages/akshad.png';
import AkshadHover from '../assets/Members/pics/akshadHover.png';
import Balaji from '../assets/Members/AiImages/balaji.png';
import BalajiHover from '../assets/Members/pics/balajiHover.png';
import Joshua from '../assets/Members/AiImages/blessing.png';
import JoshuaHover from '../assets/Members/pics/blessingHover.png';
import Che from '../assets/Members/AiImages/che.png';
import CheHover from '../assets/Members/pics/cheHover.png';
import Deva from '../assets/Members/AiImages/deva.png';
import DevaHover from '../assets/Members/pics/devaHover.png';
import Dharun from '../assets/Members/AiImages/dharun.png';
import DharunHover from '../assets/Members/pics/dharunHover.png';
import Harish from '../assets/Members/AiImages/harish.png';
import HarishHover from '../assets/Members/pics/harishHover.png';
import Jandy from '../assets/Members/AiImages/jandy.png';
import JandyHover from '../assets/Members/pics/jandyHover.png';
import Nandhini from '../assets/Members/AiImages/nandhini.png';
import NandhiniHover from '../assets/Members/pics/nandhiniHover.png';
import Pawin from '../assets/Members/AiImages/pawin.png';
import PawinHover from '../assets/Members/pics/pawinHover.png';
import Rahul from '../assets/Members/AiImages/rahul.png';
import RahulHover from '../assets/Members/pics/rahulHover.png';
import Razy from '../assets/Members/AiImages/razy.png';
import RazyHover from '../assets/Members/pics/razyHover.png';
import Sandy from '../assets/Members/AiImages/sandy.png';
import SandyHover from '../assets/Members/pics/sandyHover.png';
import Suba from '../assets/Members/AiImages/suba.png';
import SubaHover from '../assets/Members/pics/subaHover.png';
import Vignesh from '../assets/Members/AiImages/vignesh.png';
import VigneshHover from '../assets/Members/pics/vigneshHover.png';
import Vigneshwaren from '../assets/Members/AiImages/vigneshwaren.png';
import VigneshwarenHover from '../assets/Members/pics/vigneshwarenHover.png';
import Vishal from '../assets/Members/AiImages/vishal.png';
import VishalHover from '../assets/Members/pics/vishalHover.png';

let details = [
  {
    name: `Aakash`,
    photo: Akash,
    hoverPhoto: AkashHover,
    github: 'https://github.com/Aakash1106S',
    linkedin: 'https://www.linkedin.com/in/aakash-j-269bb8333/'
  },
  {
    name: `Abhinivesh`,
    photo: Abhinivesh,
    hoverPhoto: AbhiniveshHover,
    github: 'https://github.com/ABHISA888/lab-git-and-github',
    linkedin: 'https://www.linkedin.com/in/abhinivesh-s-888894sa/'
  },
  {
    name: `Akshad B`,
    photo: Akshad,
    hoverPhoto: AkshadHover,
    github: 'https://github.com/akshad2007',
    linkedin: 'www.linkedin.com/in/akshad-b-99a683325'
  },
  {
    name: 'Abdullah M',
    photo: Abdullah,
    hoverPhoto: AbdullahHover,
    github: 'https://github.com/abdullah2004-kalvium/git-it.git',
    linkedin: 'https://www.linkedin.com/in/abdullah-m-9023b932a/'
  },
  {
    name: 'Blessing Joshua J',
    photo: Joshua,
    hoverPhoto: JoshuaHover,
    github: 'https://github.com/blesjosh',
    linkedin: 'https://www.linkedin.com/in/blessing-joshwa/'
  },
  {
    name: 'Balaji',
    photo: Balaji,
    hoverPhoto: BalajiHover,
    github: 'https://github.com/Balaji-R-2007',
    linkedin: 'https://www.linkedin.com/in/balaji-r-640349315/'
  },
  {
    name: 'Che Shahith',
    photo: Che,
    hoverPhoto: CheHover,
    github: 'https://github.com/cheshahith',
    linkedin: 'https://www.linkedin.com/in/che-shahith-7588b8334/'
  },
  {
    name: 'Deva Harsheni',
    photo: Deva,
    hoverPhoto: DevaHover,
    github: 'https://github.com/Harsheni10160',
    linkedin: 'https://github.com/Harsheni10160'
  },
  {
    name: 'Dharun Kumar',
    photo: Dharun,
    hoverPhoto: DharunHover,
    github: 'https://github.com/RedAntDroid',
    linkedin: 'https://www.linkedin.com/in/dharun-kumar-7833b332a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Harish B',
    photo: Harish,
    hoverPhoto: HarishHover,
    github: 'https://github.com/harishb2006',
    linkedin: 'https://www.linkedin.com/in/harish-b-41450232a/'
  },
  {
    name: 'Jandy Roach',
    photo: Jandy,
    hoverPhoto: JandyHover,
    github: 'https://github.com/jandyroach6',
    linkedin: 'https://www.linkedin.com/in/jandy-roach-9234a032a/'
  },
  {
    name: 'Nandhini',
    photo: Nandhini,
    hoverPhoto: NandhiniHover,
    github: 'https://github.com/nandhini315',
    linkedin: 'https://www.linkedin.com/in/nandhini-m-b00801314/'
  },
  {
    name: 'Pawin',
    photo: Pawin,
    hoverPhoto: PawinHover,
    github: 'https://github.com/pawin46',
    linkedin: 'www.linkedin.com/in/pawin-d-844396331'
  },
  {
    name: 'Rahul R',
    photo: Rahul,
    hoverPhoto: RahulHover,
    github: 'https://github.com/rahulrr-coder',
    linkedin: 'https://www.linkedin.com/in/rahul-r-r/'
  },
  {
    name: 'Mohammed Razy',
    photo: Razy,
    hoverPhoto: RazyHover,
    github: 'https://github.com/R-azy',
    linkedin: 'https://www.linkedin.com/in/muhammed-razy-51237332a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Santhanam',
    photo: Sandy,
    hoverPhoto: SandyHover,
    github: 'https://github.com/4SxSANDY',
    linkedin: 'https://www.linkedin.com/in/sandanam-k-3654b5308/'
  },
  {
    name: 'Suba Dharshini',
    photo: Suba,
    hoverPhoto: SubaHover,
    github: 'https://github.com/Subadharshini05',
    linkedin: 'https://www.linkedin.com/in/suba-dharshini-607060312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Vignesh A',
    photo: Vignesh,
    hoverPhoto: VigneshHover,
    github: 'https://github.com/Vigneshkalvium',
    linkedin: 'https://www.linkedin.com/in/vigneshkalvium/'
  },
  {
    name: 'Vigneshwaren',
    photo: Vigneshwaren,
    hoverPhoto: VigneshwarenHover,
    github: 'https://github.com/Vigneshwaran-star/Vigneshwaran-star',
    linkedin: 'https://www.linkedin.com/in/vigneshwaran-p-94737132a/'
  },
  {
    name: 'Vishal M',
    photo: Vishal,
    hoverPhoto: VishalHover,
    github: 'https://github.com/vishalm342',
    linkedin: 'https://www.linkedin.com/in/vishal-m-4745b0314/'
  }
];



const Members = () => {
  return (
    <div>


      {/* Keep original ID card image */}
      <img draggable='false'
        className="mx-auto w-[1050px] h-[975px]"
        src={Idcard}
        alt="ID Card"
      />

      {/* Keep original Ajay and Sibi section */}
      <div className="flex justify-center items-center px-[200px] py-[200px]">
        <img draggable='false'
          className="mx-[50px] w-[25%] h-[25%]"
          src={Ajay}
          alt="Ajay"
        />
        <img draggable='false'
          className="mx-[50px] w-[25%] h-[25%]"
          src={Sibi}
          alt="Sibi"
        />
      </div>


      {/* Members grid with hover cards */}
      <div className="mx-auto bg-[#3E1A3B] rounded-[20px] w-full max-w-[1450px] h-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-0">
          {details.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;