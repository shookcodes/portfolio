import React from 'react';
import "../styles/global.scss";
import style from "./parallax.module.scss";
import About from "./about.js";

export default function Parallax() {
    return (
        <div>
            <div className={style.container}>

                <About className={style.stay} />

            </div>
            <section>
                <div className={style.bg1}></div>
            </section>


        </div >
    )
}