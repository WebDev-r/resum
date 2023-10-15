import React from "react";
import { Icon } from '@iconify/react';
export default class Project extends React.Component{
    render(){
        return(
         <>
           <p className='text-6xl mx-auto text-center text-gray-500 mt-5'>PROJECTS</p>
            <div className="flex justify-evenly mt-10 pb-6">
                <div className="h-[25vw] w-[25%]  bg-gradient-to-r from-purple-800 to-red-700 text-center"><div className="mt-10"><a className="text-white text-[4vw] border-2 border-solid border-white" href="https://webdev-r.github.io/shorty/">url shortner</a><p className="text-[1.5vw] text-white">this is full stack project,it shorten the large url.</p></div></div>
                <div className="h-[25vw] w-[25%] bg-gradient-to-r from-purple-800 to-red-700"><div className="text-[10vw] text-white ml-[30%]"><a href="https://webdev-r.github.io/newss/"><Icon icon="fluent:news-24-filled" /></a><p className="text-[3vw] text-white">khabri</p><p className="text-[1.5vw] text-white">this is a news <br></br>site where <br></br> you can fetch news.</p></div></div>
                <div className="h-[25vw] w-[25%] bg-gradient-to-r from-purple-800 to-red-700"><div className="text-[10vw] text-white ml-[30%]"><a href="https://webdev-r.github.io/weather/"><Icon icon="material-symbols:weather-hail-outline" /></a><p className="text-[3vw] text-white">weather</p></div></div>
            </div>
        </>
        );
    }
}