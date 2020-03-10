import React from "react";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

const nutritionPic = require("../assets/nutrition.png")
const burgerPic = require("../assets/burger.png")
const weatherPic = require("../assets/weather.png")
const quizPic = require("../assets/quiz.png")
const plannerPic = require("../assets/planner.png")
const hookPic = require("../assets/hook.png")

function nutritionGit(){
    window.open('https://github.com/Sharonyel/project2')
}
function burgerGit(){
    window.open('https://github.com/mdominick300/burger')
}
function weatherGit(){
    window.open('https://github.com/mdominick300/WeatherDashboard')
}
function quizGit(){
    window.open('https://github.com/mdominick300/CodeQuiz')
}
function plannerGit(){
    window.open('https://github.com/mdominick300/DayPlanner')
}
function hookGit(){
    window.open('https://github.com/mdominick300/HookEvent')
}

function Portfolio() {
  return (
    <div>
      <div className="row">
            <div className="col-md-2">
            </div>
            <div className="whitebox col-md-8">
                <h2>Portfolio</h2>
                <div className="line"></div>
                <div></div>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <button><a href="https://salty-ravine-80275.herokuapp.com/" target="_blank"><img
                                        src={nutritionPic} className="d-block w-100"
                                        alt="..."/></a></button>
                            <div className="carousel-caption d-none d-md-block slideInfo">
                                <h5>Nutrition Journal</h5>
                                <p><button className="btn" id="github2"
                                        onClick={nutritionGit}></button>
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <button><a href="https://radiant-reef-37891.herokuapp.com/" target="_blank"><img
                                        src={burgerPic} className="d-block w-100"
                                        alt="..."/></a></button>
                            <div className="carousel-caption d-none d-md-block slideInfo">
                                <h5>Burger App</h5>
                                <p><button className="btn" id="github2"
                                        onClick={burgerGit}></button>
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <button><a href="https://mdominick300.github.io/WeatherDashboard/" target="_blank"><img
                                        src={weatherPic} className="d-block w-100"
                                        alt="..."/></a></button>
                            <div className="carousel-caption d-none d-md-block slideInfo">
                                <h5>Weather Dashboard</h5>
                                <p><button className="btn" id="github2"
                                        onClick={weatherGit}></button>
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <button><a href="https://mdominick300.github.io/CodeQuiz/" target="_blank"><img
                                        src={quizPic} className="d-block w-100"
                                        alt="..."/></a></button>
                            <div className="carousel-caption d-none d-md-block slideInfo">
                                <h5>Coding Quiz</h5>
                                <p><button className="btn" id="github2"
                                        onClick={quizGit}></button>
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <button><a href="https://mdominick300.github.io/DayPlanner/" target="_blank"><img
                                        src={plannerPic} className="d-block w-100"
                                        alt="..."/></a></button>
                            <div className="carousel-caption d-none d-md-block slideInfo">
                                <h5>Day Planner</h5>
                                <p><button className="btn" id="github2"
                                        onClick={plannerGit}></button>
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <button><a href="https://mdominick300.github.io/HookEvent/" target="_blank"><img
                                        src={hookPic} className="d-block w-100"
                                        alt="..."/></a></button>
                            <div className="carousel-caption d-none d-md-block slideInfo">
                                <h5>Hook Events</h5>
                                <p><button className="btn" id="github2"
                                        onClick={hookGit}></button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="col-md-2">
            </div>
        </div>
    </div>
  );
}

export default Portfolio;