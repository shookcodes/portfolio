import React, { useState, useEffect } from "react"
import { Header, MobileHeader } from "../components/header.js"
import About from "./about.js"
import Work from "./work.js"
import Contact from "./contact.js"
import "../styles/global.scss"
import Home from "./home.js"
// @ts-ignore
import { window } from "browser-monads";

function tabIndexEvent() {
  document.addEventListener('focus', function () {
    //console.log('focused: ', document.activeElement)
  }, true);

  document.activeElement.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      document.activeElement.click();
    }
  });
}


function ChangeHeader() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  return { width }
}

export default function App() {
  tabIndexEvent();
  const { width } = ChangeHeader()
  const breakpoint = 760

  return (
    <div>
      {width < breakpoint ? <MobileHeader /> : <Header />}
      <div>
        <Home id="home" className="section" tabIndex="0" />
        <About id="about" className="section" tabIndex="0" />
        <Work id="work" className="section" tabIndex="0" />
        <Contact id="contact" className="section" tabIndex="0" />
      </div>
    </div>
  )
}
