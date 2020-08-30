import React, { useState } from 'react';
import style from "./header.module.scss";
import { Link } from "react-scroll";
import Shook from "../img/shook.png";
import Hamburger from "./hamburger.js"

function Header() {
    return (
        <header className={style.container} >
            <div className={style.logo}>
                <img src={Shook} className={style.shook} alt="Shook Codes" /></div>
            <nav className={style.menuItems} >
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    className={style.home}
                >Home</Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    className={style.about}
                >About</Link>
                <Link
                    activeClass="active"
                    to="articles"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    className={style.articles}
                >Articles</Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    className={style.contact}
                >Contact</Link>
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
                    }}  >

                        <span className={style.x} onClick={toggleMenu} >x</span>
                        <nav className={style.hamburgerNav}>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                                className={style.home}
                                onClick={toggleMenu}
                            >Home</Link>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                                className={style.about}
                                onClick={toggleMenu}
                            >About</Link>
                            <Link
                                activeClass="active"
                                to="articles"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                                className={style.articles}
                                onClick={toggleMenu}
                            >Articles</Link>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                                className={style.contact}
                                onClick={toggleMenu}
                            >Contact</Link>
                        </nav>

                    </div>
                </div>


            </header>

        </div >
    );
};

export { Header, MobileHeader };