import React from "react";
import { NavLink } from "react-router-dom";
import study from "../src/Images/study.jpg"
import Common from "./Common";

const Home = () => {
    return(
        <>
        <Common name="Study React Tutorial With"
                    imgSrc={study}
                    btnName="Get Started"
                    visit="/service" />
        </>
    )
}


export default Home;