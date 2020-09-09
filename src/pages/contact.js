import React from "react"
import style from "./contact.module.scss";
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

export default function Contact() {
    return (
        <div className={style.container}>
            <div className="contact" >
                <h1 className={style.header}>Contact</h1>
                <form className={style.form} action="https://formspree.io/xknqlpde" method="POST"><fieldset>
                    <label htmlFor="firstname" id="firstnameLabel" >First Name:</label><input type="text" className={style.short} name="firstname" placeholder="First Name" required />
                    <label htmlFor="lastname" id="lastnameLabel">Last Name:</label><input type="text" className={style.short} name="lastname" placeholder="Last Name" required />
                    <label htmlFor="email" id="emailLabel">Email Address:</label><input type="text" className={style.long} id="email" name="_replyto" placeholder="Email Address" required />
                    <br></br>
                    <label htmlFor="message" id="messageLabel">Message:</label><textarea type="text" className={style.textbox} name="message" id="message" placeholder="Message" required />
                </fieldset>
                    <button className={style.formButton} type="submit">Send</button></form>
                <div>
                    <h3 className={style.header}>Connect with me!</h3>
                    <span className="icons">
                        <a className={style.social} href="https://twitter.com/joojaco" target="_blank" rel="noreferrer"><FaTwitter className={style.icon} id="wp" style={{ color: '#1A91DA' }} /></a>
                        <a className={style.social} href="https://github.com/joojaco" target="_blank" rel="noreferrer"><FaGithub className={style.icon} id="wp" style={{ color: '#1c1c1c' }} /></a>
                        <a className={style.social} href="https://linkedin.com/in/sarahshook" target="_blank" rel="noreferrer"><FaLinkedin className={style.icon} id="wp" style={{ color: '#0073B0' }} /></a>

                    </span>
                </div>
            </div>
        </div>
    )
}
