import React from "react";
import "./About.css";
import heading from '../../../resources/heading-line.png';
import barberOne from '../../../resources/barberOne.jpg';
import barberTwo from '../../../resources/barberTwo.jpg';
import barberThree from '../../../resources/barberThree.jpg';
import Scroll from './Scroll';

const About = ()=>{
    
    return (
        <div className="aboutContainer">
            <div className="headerAbout">
                <div className="textAbout">
                    <h1 className="text-3xl text-white font-prata w-100 h-100 font-bold text-center">
						{" "}
						Our Community of Barber's {" "}
					</h1>
					<img class="w-36 mt-4 mb-4 mx-auto"src={heading} alt="line"></img>
                </div>
                <div className="color"></div>
            </div>
            <div className="historyContainer">
                <div className="historyAbout">
                    <span>Introducing</span>
                    <h1>The Community  of Barbers</h1>
                    <div className="barbaAbout"></div>
                    <p>Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boys' hair. A barber's place of work is known as a "barbershop" or a "barber's". Barbershops are also places of social interaction and public discourse. In some instances, barbershops are also public forums.</p>
                </div>
                <div className="imageContainerAbout">
                    <img src={barberOne} className="imageOne" />
                    <img src={barberTwo} className="imageTwo" />
                    <img src={barberThree} className="imageThree" />
                </div>
            </div>
            <div className="Nosotros">

            </div>
            <div className="imageBrazo">
                <div className="color"></div>
                <div className="textAbout">
                    <h1 className=" flaco text-3xl text-white font-prata w-100 h-100 font-bold text-center">
                            {" "}
                            Making You Look Good Is In Our Haritage.{" "}
                        </h1>
                    </div>
                </div>
            <Scroll></Scroll>
        </div>
    )
}

export default About;