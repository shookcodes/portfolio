import React from "react";
import style from "./navigation.module.scss";
import { FiMenu } from "react-icons/fi";

export default function Navigation() {
    return (
        <div className={style.container}>
            <FiMenu className={style.hamburger} />
            <div className={style.menu} />
        </div>
    )
}
