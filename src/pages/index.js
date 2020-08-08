import React from "react"
import "../styles/global.scss";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";

import About from "./about.js"


export function Navigation() {
  return (
    <div className="hamburger-container">
      <FiMenu className="hamburger" />
      <div className="hamburger-menu" />
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="backsplash"> </div>
      <div className="container">

        <div>
          <h1 className="hello">Hello!</h1>
        </div>
        <div className="sarah">
          I'm Sarah, and this is my little slice of internet to share my thoughts about code and development.
          </div>
        <IoIosArrowDropdown className="down" />
      </div >

      <About />
    </div>



  )
}

