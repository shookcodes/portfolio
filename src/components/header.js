import React, { useState } from 'react';
import style from "./header.module.scss";
import { Link } from "react-scroll";
import Shook from "../img/shook.png";
import Hamburger from "./hamburger.js"
import MenuLink from "./menuLink.js"

function Header() {
    return (
        <header className={style.container} >
            <div className={style.logo}>
                <Link activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}><img src={Shook} className={style.shook} alt="Shook Codes" /></Link></div>
            <nav className={style.menuItems} >
                <MenuLink
                    to="home"
                    style={style.home}
                    title="Home"
                />
                <MenuLink
                    to="about"
                    style={style.about}
                    title="About"
                />
                <MenuLink
                    to="work"
                    style={style.work}
                    title="Work"
                />
                <MenuLink
                    to="contact"
                    style={style.contact}
                    title="Contact"
                />
            </nav>
        </header>
    );
};

function MobileHeader() {



    const [showBg, setShowBg] = useState(false);
    const [showMenu, setShowMenu] = useState(false);


    function toggleMenu() {
        setShowBg(!showBg)
        setShowMenu(!showMenu)

    }



    return (
        <div>

            <div className={style.menuContainer} id="#menu">

            </div>
            <header className={style.container} >
                <div className={style.logo}>
                    <Link activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}><img src={Shook} className={style.shook} alt="Shook Codes" /></Link></div>
                <Hamburger onClick={toggleMenu} />

                <div className={style.backdrop} style={{
                    display: showBg ? `block` : `none`,
                }} >
                    <div id="menu" className={style.menu} style={{
                        display: showMenu ? `block` : `none`,
                    }} >

                        <span className={style.x} onClick={toggleMenu} >x</span>
                        <nav className={style.hamburgerNav}>
                            <MenuLink
                                to="home"
                                style={style.home}
                                title="Home"
                                onClick={toggleMenu}
                            />
                            <MenuLink
                                to="about"
                                style={style.about}
                                title="About"
                                onClick={toggleMenu}
                            />
                            <MenuLink
                                to="work"
                                style={style.work}
                                title="Work"
                                onClick={toggleMenu}
                            />
                            <MenuLink
                                to="contact"
                                style={style.contact}
                                title="Contact"
                                onClick={toggleMenu}
                            />
                        </nav>

                    </div>
                </div>


            </header>

        </div >
    );
};

export { Header, MobileHeader };