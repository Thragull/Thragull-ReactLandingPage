import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

//create your first component
const Home = (props) => {
	console.log ("desde el home, " + props.active);
	switch (props.active){
		case "home": {
			return (
				<div className="text-center">
					<Navbar />
					<Jumbotron />
					<Cards />
					<Footer/>
				</div>
			);
			break;
		}
		case "about":{
			return (
				<div className="text-center">
					<Navbar />
					<About />
					<Footer/>
				</div>
			);
			break;
		}
		case "services":{
			return (
				<div className="text-center">
					<Navbar />
					<Services />
					<Footer/>
				</div>
			);
			break;
		}
		case "contact":{
			return (
				<div className="text-center">
					<Navbar />
					<Contact />
					<Footer/>
				</div>
			);
			break;
		}
		default:{
			return (
				<div className="text-center">
					<Navbar />
					<Footer/>
				</div>
			);
			break;
		}
	}
};


export default Home;
