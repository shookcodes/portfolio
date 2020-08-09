import React from "react";
import "../styles/global.scss";
import { IoIosArrowDropdown } from "react-icons/io";
import About from "./about.js";
import Header from "../components/Header.js";
import { Link } from "react-scroll";




export default function Home() {
  return (
    <div>
      <Header />
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
      <About id="about" />

    </div>

  )
}


const ScrollToLink = () => (
  <Link to="#about">About</Link>
)


