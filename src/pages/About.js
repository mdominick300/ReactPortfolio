import React from "react";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
var photo = require('../assets/FullSizeRender.jpg')

function gitClick(){
  window.open('https://github.com/mdominick300')
}

function linkClick(){
  window.open('https://www.linkedin.com/in/matthew-dominick-922b0a64?trk=people-guest_profile-result-card_result-card_full-click')
}

function About() {
  return (
    <div>
     <div className="row">
            <div className="col-md-2">
            </div>
            <div className="whitebox topdiv col-md-8">
                <div className="row">
                    <h2 className="col-md-8">About Me</h2>
                    <div className="col-md-4 text-right">
                        <p>mdominick300@gmail.com</p>
                        <p>(336)848-6212</p>
                    </div>
                </div>
                <div className="line">
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        
                        <img className="pic col-md-4 img-responsive" id="bio-image" src={photo}
                            alt="Matthew"/>

                        <p>My name is Matthew Dominick and I am an aspiring full stack web developer! Currently enrolled
                            in a 6 month boot camp through UNCC. After completion I hope to get a job in a related
                            field.
                        </p>
                        <br/>
                        <br/>
                        <p>I currently have a full time job. My second job is an aspiring web developer learning the ins
                            and outs of coding. The things I enjoy the most about coding include: the building aspect,
                            the "Aha moments", and cool and interesting things javascript can accomplish. During the
                            boot camp process I have learned about: HTML, CSS, Javascript, Node, Jquery, mySQL,
                            sequelize, handlebars, and express .</p>
                        <br/><br/>
                        <p>
                            Outside of className I enjoy watching sports, hanging out with friends and playing with my dog
                            Echo. He is spoiled rotten by my wife and myself. I stay active between sports, social
                            activities and working out. The sport I play the most is Golf. Its a relaxing way to spend a
                            few hours on a beautiful day.
                        </p>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-4 text-center">
                                <button className="btn" id="github"
                                    onClick={gitClick}></button>
                            </div>
                            <div className="col-md-4 text-center">
                                <button className="btn" id="linkedin"
                                    onClick={linkClick}></button>
                            </div>
                            <div className="col-md-2"></div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-md-2">
            </div>
            <div className="push"></div>
        </div>
    </div>
  );
}

export default About;