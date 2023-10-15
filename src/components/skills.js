import React from "react";
import Skill from '../components/image/M.png';
import { Icon } from '@iconify/react';
export default class Skills extends React.Component{
    render(){
        return(
           <>
           <div>
            <div className="">
                <img src={Skill} alt=""></img>
            </div>
           </div>
           <p className='text-6xl mx-auto text-center text-gray-500 mt-5'>SKILLS</p>
          
           <div className="flex justify-evenly m-[1vw] pb-6">
                <div className="h-[20vw] w-[15%]  bg-gradient-to-r from-purple-800 to-red-700"><Icon className="text-[10vw] m-auto mt-[4vw]" icon="logos:java" /> <p className='text-[2vw] mx-auto text-center text-white mt-5'>java</p></div>
                <div className="h-[20vw] w-[15%] bg-gradient-to-r from-purple-800 to-red-700 "><Icon className="text-[10vw] m-auto mt-[4vw]" icon="logos:react" /><p className='text-[2vw] mx-auto text-center text-white mt-5'>react</p></div>
                <div className="h-[20vw] w-[15%] bg-gradient-to-r from-purple-800 to-red-700"><Icon className="text-[8vw] m-auto mt-[5.5vw]" icon="logos:nodejs" /><p className='text-[2vw] mx-auto text-center text-white mt-5'>nodejs</p></div>
                <div className="h-[20vw] w-[15%] bg-gradient-to-r from-purple-800 to-red-700"><Icon className="text-[10vw] m-auto mt-[4vw]" icon="devicon:tailwindcss" /><p className='text-[2vw] mx-auto text-center text-white mt-5'>tailwindcss</p></div>
                <div className="h-[20vw] w-[15%] bg-gradient-to-r from-purple-800 to-red-700"><Icon className="text-[10vw] m-auto mt-[4vw]" icon="devicon:mongodb-wordmark" /><p className='text-[2vw] mx-auto text-center text-white mt-5'>mongodb</p></div>
            </div>
        
           </>
        )
    }
}