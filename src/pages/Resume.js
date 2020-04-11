import React from "react";
import Download from "../components/PDF"

function resumeClick() {
    window.open('../assets/Resume.pdf')
}

function Resume() {
    return (
    <div className="row">

            <div className="col-md-2">
            </div>

            <div className=" col-md-8">
                <br/>
                
                
                    <Download />
                    
                <div className="whitebox">
                   
                </div>
            </div>
        </div>
        )
}

export default Resume;