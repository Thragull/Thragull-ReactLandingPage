//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.js";


let activeSite= "home";

//render your react application
ReactDOM.render(<Home active ={activeSite} />, document.querySelector("#app"));

let home = document.getElementById("home");
let about = document.getElementById("about");
let services = document.getElementById("services");
let contact = document.getElementById("contact");


home.addEventListener("click", homeSelector);
about.addEventListener("click", aboutSelector);
services.addEventListener("click", servicesSelector);
contact.addEventListener("click", contactSelector);

function homeSelector(){
	let actualActive = document.querySelector(".active")
	actualActive.classList.replace("active", "inactive");
	home.classList.replace("inactive", "active");
    activeSite = home.id;
    ReactDOM.render(<Home active ={activeSite} />, document.querySelector("#app"));
}

function aboutSelector(){
	let actualActive = document.querySelector(".active")
	actualActive.classList.replace("active", "inactive");
	about.classList.replace("inactive", "active");
    activeSite = about.id;
    ReactDOM.render(<Home active ={activeSite} />, document.querySelector("#app"));
}

function servicesSelector(){
	let actualActive = document.querySelector(".active")
	actualActive.classList.replace("active", "inactive");
	services.classList.replace("inactive", "active");
    activeSite = services.id;
    ReactDOM.render(<Home active ={activeSite} />, document.querySelector("#app"));
}

function contactSelector(){
	let actualActive = document.querySelector(".active")
	actualActive.classList.replace("active", "inactive");
    contact.classList.replace("inactive", "active");
    activeSite = contact.id;
    ReactDOM.render(<Home active ={activeSite} />, document.querySelector("#app"));
}
