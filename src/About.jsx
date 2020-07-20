import React from "react";
import { NavLink } from "react-router-dom";
import img2 from "../src/Images/web.svg"
import Common from "./Common";

const About = () => {
    return(
        <>
            <Common name="Welcome to About page"
                    imgSrc={img2}
                    btnName="Contact Us"
                    visit="/contact" />
        </>
    )
}


export default About;