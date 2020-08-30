import React, { useState, useEffect } from "react";
import "../styles/global.scss";
import { IoIosArrowDropdown } from "react-icons/io";
import About from "./about.js";
import ArticlesPreview from "./articlespreview.js";
import Contact from "./contact.js";
import { Header, MobileHeader } from "../components/Header.js";
import { Link } from "react-scroll";
import Section from "./section.js"


function ChangeHeader() {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return { width };
}

export default function Home() {
    const { width } = ChangeHeader();
    const breakpoint = 760;


    return (
        <div>
            {width < breakpoint ? <MobileHeader /> : <Header />}
            <div className="backsplash"> </div>
            <div className="container">

                <div id="home">
                    <h1 className="hello">Hello!</h1>
                </div>
                <div className="sarah">
                    I'm Sarah, and this is my little slice of internet to share my thoughts about code and development.
          </div>

                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    className="down-link"

                ><IoIosArrowDropdown className="down" /></Link>
            </div >
            <About id="about" className="section" />
            <ArticlesPreview id="articlesPreview" className="section" />
            <Contact id="contact" className="section" />

        </div>

    )
}



