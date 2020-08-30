import React from 'react';
import About from "../pages/about.js";
import style from "./section.module.scss"


export default function Section() {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.fixed}>
                    <About id="about" className={style.text} /> </div>
                <div className={style.background} >
                </div>
            </div>
        </div>
    )
}

