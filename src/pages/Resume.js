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
                
                <button className="btn float-right" id="print">
                    <Download />
                    </button>
                <div className="whitebox">
                    <div className="row align-items-end flex-column resume">
                        <p>Matthew Dominick</p>
                        <p>6712 Santa Maria Lane, Charlotte NC 28227</p>
                        <p>Phone: (336)848-6212</p>
                        <p>Email: mdominick300@gmail.com</p>
                    </div>
                    <div className="row break">

                        <h3>Summary</h3>
                        <br/>
                        <p className="indent">Full Stack Web Developer prepared to help a development team reach
                            their goals
                        </p>
                    </div>
                    <div className="row break">
                        <div>
                            <h3>Education</h3>
                        </div>
                        <br/>
                        <div className="row indent">
                            <p>Full Stack Web Developer Boot Camp</p>
                            <p>University of North Carolina at Charlotte, Charlotte, NC
                                <br/>
                                BSBA in Operations and Supply Chain Management</p>
                        </div>
                    </div>
                    <div className="row break">
                        <h3>Experience</h3>
                    </div>
                    <div className="row break indent">
                        <h5>UNCC Web Development Bootcamp</h5>
                        <ul className="indent">
                            <li>Comprehensive full stack development bootcamp
                            </li>
                            <li>Completed multiple assignments using various coding languages and methods
                            </li>
                            <li>HTML5, CSS3, Javascript, Express, Handlebars, Mongol.js, Node.js, Git, mySQL, JQuery,
                                Sequelize, React, Heroku

                            </li>
                            <li>Thrived in team environments to complete projects
                            </li>

                        </ul>
                    </div>
                    <div className="row break indent">
                        <h5>Operations Manager</h5>
                        <br/>
                        <ul className="indent">
                            <li>Negotiated half million dollar shipping agreements to lower company inbound shipping
                                cost by
                                30%
                            </li>
                            <li>Oversaw warehouse development during rapid company expansion of up to 80% yearly</li>
                            <li>Held weekly meetings to assist with communication and feedback</li>
                            <li>Maximize efficiency by continuously improving warehouse layout and workflows</li>
                            <li>Maintained facilities and equipment with routine maintenance</li>
                            <li>Supervised inventory levels </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Resume;