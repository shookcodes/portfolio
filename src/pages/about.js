import React from "react"
import "../styles/global.scss";
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { AiOutlineConsoleSql } from "react-icons/ai"
import { FaReact } from "react-icons/fa"
import { RiGatsbyLine } from "react-icons/ri"
import { FaWordpressSimple } from "react-icons/fa"



export default function About() {
    return (
        <div>
            <div className="backsplash"></div>
            <div className="about">
                <h1>About</h1>
                <div>I started my coding journey back in the MySpace days, but really dug into development about 5 years ago when I discovered PowerShell. At my employer, I mainly focus on automation using PowerShell, JavaScript, SQL, PHP. I also maintain my employer's WordPress site and develop custom pages and reports for the PowerSchool platform. In my personal time, I work with React (currenty focusing on Gatsby), SASS, and am diving into animated SVGs. From building PCs from scratch to developing responsive website, I enjoy exploring technology.  </div>
                <div>
                    <h2>Tech</h2>
                    <span className="dev-icons">
                        <FaHtml5 className="icon" id="html5" style={{ color: '#e44d26' }} /> <FaCss3Alt className="icon" id="css3" style={{ color: '#2299F8' }} /> <IoLogoJavascript className="icon" id="js" style={{ color: '#D6BC2B' }} /> <AiOutlineConsoleSql className="icon" id="sql" style={{ color: '#DE1F13' }} /> <FaReact className="icon" id="react" style={{ color: '#53C1DE' }} /> <RiGatsbyLine className="icon" id="gatsby" style={{ color: '#633194' }} /> <FaWordpressSimple className="icon" id="wp" style={{ color: '#21759B' }} />
                    </span>
                </div>
            </div>
        </div>
    )
}
