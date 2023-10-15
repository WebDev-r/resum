import React from "react";
export default class Table extends React.Component{
    render(){
        return(
            <>
         
            <table className="table-auto">
                <tr><th colspan="2">school</th></tr>
                <tr>
                    <th>X</th>
                    <th>75%</th>
                </tr>
                <tr>
                    <th>XII</th>
                    <th>77%</th>
                </tr>
                <tr><th colspan="2">collage</th></tr>
                <tr>
                    <th>1st year</th>
                    <th>7.9 CGPA</th>
                </tr>
            </table>
            </>
        )
    }
}