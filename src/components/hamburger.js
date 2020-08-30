import React from 'react';
import style from "./header.module.scss";

export default function Hamburger(props) {

    return (
        <div className={style.hamburger} onClick={props.onClick} >
            <div className={style.bar} > </div>
            <div className={style.bar} > </div>
            <div className={style.bar} > </div>
            <div className={style.bar} > </div>
        </div>
    )
}