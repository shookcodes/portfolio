import React, { useState } from 'react';
import style from "./header.module.scss";
import { Link } from "react-scroll";

export default function MenuLink(props) {
    return (
        <Link
            activeClass="active"
            to={props.to}
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className={props.style}
            onClick={props.onClick}
        >{props.title}</Link>
    )
}