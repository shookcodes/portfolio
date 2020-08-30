import React from "react"

import style from "./contact.module.scss";


import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

export default function Contact() {
    return (
        <div>
            <div className="backsplash"></div>
            <div className="contact section" >
                <h1 id="contacth1">Contact</h1>
                <form className={style.form} ><fieldset>
                    <label for="firstname">First Name:</label><input type="text" className={style.short} id="firstname" placeholder="First Name" />
                    <label for="lastname">Last Name:</label><input type="text" className={style.short} id="lastname" placeholder="Last Name" />
                    <label for="email">Email Address:</label><input type="text" className={style.long} id="email" placeholder="Email Address" />
                    <br></br>
                    <label for="message">Message:</label><textarea type="text" className={style.textbox} id="message" placeholder="Message" />
                </fieldset> </form>
                <div>
                    <h2>Connect with Me</h2>
                    <span className="icons">
                        <FaTwitter className="icon" id="wp" style={{ color: '#1A91DA' }} /> <FaLinkedin className="icon" id="wp" style={{ color: '#0073B0' }} />
                    </span>
                </div>
            </div>
        </div>
    )
}
