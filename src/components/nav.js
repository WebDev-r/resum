import React from "react";
export default class Nav extends React.Component{
    render(){
        return(
            <nav className="list-none flex  text-[2vw] text-white">
                <li className=" mr-[2vw] hover:bg-gradient-to-r from-red-200 to-green-500 hover:rounded-lg hover:text-gray-800 pl-3 pr-3 mt-2 mb-2" >
                    <a  href="#about">about me</a>
                </li>
                <li className=" mr-[2vw] hover:bg-gradient-to-r from-red-200 to-green-500 hover:rounded-lg hover:text-gray-800 pl-3 pr-3 mt-2 mb-2">
                   <a href="#project"> project</a>
                </li>
                <li className=" mr-[2vw] hover:bg-gradient-to-r from-red-200 to-green-500 hover:rounded-lg hover:text-gray-800 pl-3 pr-3 mt-2 mb-2">
                    services
                </li>
                <li className="mr-[2vw] hover:bg-gradient-to-r from-red-200 to-green-500 hover:rounded-lg  hover:text-gray-800 pl-3 pr-3 mt-2 mb-2 ">
                    cv
                </li>
            </nav>
        )
    }
}