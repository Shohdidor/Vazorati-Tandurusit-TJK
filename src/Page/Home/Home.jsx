import React from 'react'

// video 
import Video from "/src/Video&Image/Dushanbe.mp4"

// Component 
import Card from '../../Components/BlurMenu/Card/Card';
import BlurMenu from '../../Components/BlurMenu/BlurMenu';
import ProfessionalCard, { Card2 } from '../../Components/MiniCard/MiniCard';

import CursorAnimation from '../../Components/CursorAnimation/CursorAnimation';


// MUI 
import RightIcons from '@mui/icons-material/KeyboardArrowRight';
import HealingIcon from '@mui/icons-material/Healing';

function Home() {
return (
    <>    
    <CursorAnimation />
    
    <div className="relative w-full">
    <video src={Video} autoPlay muted loop className="w-full h-[90vh] object-cover" />

    <div className="absolute inset-0 bg-black opacity-50"></div>

    <h1 className="absolute w-[700px] top-1/3 left-1/4 transform -translate-x-1/3 -translate-y-1/3 font-medium text-white text-4xl">
    Вазорати тандурустӣ
ва ҳифзи иҷтимоии аҳолии
Ҷумҳурии Тоҷикистон
    <div>
    <button className='p-[5px_25px] mt-5 duration-150 ease-in-out text-[18px] rounded-[2px] border-[1px] border-[white] hover:bg-[#8fbfda7a] hover:text-[#202020] font-medium'>
    Хабарҳои охирин <RightIcons /> 
    </button>
    </div>
    </h1>
    <div className='absolute top-[500px] left-1/2 -translate-x-1/2 -translate-y-1/2'>
    <BlurMenu />
    </div>

    </div>
    <div className='flex justify-center items-center gap-[45px]'>
        <div>
        <Card />
        </div>
        <div className='mt-[20px]'>
        <ProfessionalCard />
        </div>
    </div>

    <div className='flex justify-between w-[80%] mt-[50px] mb-[50px] items-center m-auto'>
        <Card2 button={"Муфассал"} text={"Чорабиниҳои расмӣ"} text2={"То баргузории форуми сатҳи баланд чанд рӯзи дигар боқӣ монд"} image={"https://indyguide-web-development.s3.us-east-2.amazonaws.com/listings/images/thumbnail/Navruz-Tour-In-Tajikistan-1644312138401.webp"} />
        <Card2 button={"Муфассал"} text={"Ҳуҷҷатҳои ҷорӣ"} text2={"Кодекси тандурустии Ҷумҳурии Тоҷикистон"} image={"https://i.ytimg.com/vi/QTLdCHIKODM/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGBkgYShlMA8=&rs=AOn4CLD-ohA946aBA8cZByQRN8PCEFo7-A"} />
        <Card2 button={"Муфассал"} text={"Сомонаҳои мақомоти давлатӣ ва шарикони мо"} text2={"Агентии ИМА оид ба рушди байналмилалӣ"} image={"https://timesca.com/wp-content/uploads/2024/11/54113859461_d6f96d0698_b.jpg"} />
    </div>

    <div className='pl-[150px] py-[45px] bg-[#f5f5f5]'>
  <h1 className='text-[27px] font-semibold cursor-default text-gray-800 mb-8'>
    Сомонаҳои мақомоти давлатӣ ва шарикони мо
  </h1>
  <hr className='border-[#0000003a] w-[45%] border-[1px] mb-[50px]' />

  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-[100px] lg:pr-[100px]'>

    <div className="group max-w-md w-[80%] mx-auto p-6 bg-gray-300 hover:bg-gray-400 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-500 ease-in-out">
      <div className="flex justify-center items-center mb-4 p-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-300">
        <img src="https://moh.tj/wp-content/uploads/2024/03/gerb-tadzhikistana.jpg" alt="Логотип" className="w-20 h-20 rounded-full shadow-md" />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold cursor-default text-gray-800 mb-2">
            Президенти Ҷумҳурии Тоҷикистон
        </h2>
      </div>
    </div>

    <div className="group max-w-md w-[80%] mx-auto p-6  bg-gray-300 hover:bg-gray-400 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-500 ease-in-out">
      <div className="flex justify-center items-center mb-4 p-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-300">
        <img src="https://moh.tj/wp-content/uploads/2024/03/gerb-tadzhikistana.jpg" alt="Логотип" className="w-20 h-20 rounded-full shadow-md" />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold cursor-default text-gray-800 mb-2">
            Маҷлиси миллии Маҷлиси Олии Ҷумҳурии Тоҷикистон
        </h2>
      </div>
    </div>

    <div className="group max-w-md w-[80%] mx-auto p-6 hover:bg-gray-400 bg-gray-300 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-500 ease-in-out">
      <div className="flex justify-center items-center mb-4 p-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-300">
        <img src="https://moh.tj/wp-content/uploads/2024/04/proekt-integrirovannyh-uslug-materyam-i-detyam.jpg" alt="Логотип" className="w-20 h-20 rounded-full shadow-md" />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold cursor-default text-gray-800 mb-2">
        Лоиҳаи «Хизматрасонии интеграсӣ барои модарон ва кӯдакон» 
        </h2>
      </div>
    </div>

  </div>
</div>




</>
)
}

export default Home