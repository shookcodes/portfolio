import React from 'react';
import "../styles/global.scss";
import style from "./parallax.module.scss";
import About from "./about.js";

export default function Parallax() {
    return (
        <div className={style.parallaxContainer}>
            <div className={style.background}>
                <div className={style.backgroundFill} />
            </div>
            <div className={style.foreground}>

                <h1>Oooo, parallax</h1>


            </div>
        </div>
    )
}