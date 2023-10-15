import React from "react";
const textColor=["text-cyan-300","text-pink-600","text-cyan-300","text-rose-700"]
export default class Image extends React.Component{
    constructor(props){
        super(props);
        this.changeColor=this.changeColor.bind(this)
    }
    changeColor(){
        const j=Math.floor(Math.random()*4)
        const k=Math.floor(Math.random()*4)
        this.props.handelColor(textColor[j],textColor[k]);
    }
    render(){
        return(
            <div className="bdr w-1/2 grid grid-flow-col place-content-center  text-gray-600 " >
                <button className="m-px rounded-full p-3 bg-blue-300" onClick={this.changeColor}>change color</button>
                <button className="m-px rounded-full p-3 bg-blue-300">about me</button>
            </div>
        )
    }
}