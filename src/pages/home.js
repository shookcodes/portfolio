import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-scroll";


export default function Home() {
    return (
        <div>
            <div className="backsplash"> </div>
            <div className="container">
                <div className="section">
                    <div id="home">
                        <h1 className="hello">Hello!</h1>
                    </div>
                    <div className="sarah">
                        I'm Sarah, a full-stack developer who enjoys all things tech-related.
          </div>

                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                        className="down-link"
                        tabIndex="0"
                    >
                        <IoIosArrowDropdown className="down" />
                    </Link>
                </div>
            </div>
        </div>
    )
};