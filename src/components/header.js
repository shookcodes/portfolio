import React from 'react';
import style from "./header.module.scss";
import { Link } from "react-scroll";




const Header = () => {


    return (
        <header className={style.container} >
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

export default Header;