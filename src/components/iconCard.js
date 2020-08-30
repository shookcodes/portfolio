import React from "react";
import "../styles/global.scss";
import style from "./iconCard.module.scss";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineConsoleSql } from "react-icons/ai";

import { FaReact } from "react-icons/fa";

import { RiGatsbyLine } from "react-icons/ri";
import { FaWordpressSimple } from "react-icons/fa";
import PowerShell from "../svg/powershell.svg"
import Php from "../svg/php.svg"
import PowerSchool from "../svg/powerschool.svg"
import WordPress from "../svg/wordpress.svg"



const IconContainer = ({ children }) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

function IconCard(props) {

    return (

        <div className={style.iconCard}>
            <h3 className={style.iconTitle}>{props.title}</h3>
            <span className={style.iconList}>{props.icons}</span>
        </div>

    )

};

const Icon = props => {
    switch (props.name) {
        case "powershell": return <PowerShell className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} />
        case "html5": return <FaHtml5 className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} />
        case "css3": return <FaCss3Alt className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} />
        case "js": return <IoLogoJavascript className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} />
        case "sql": return <AiOutlineConsoleSql className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} />
        case "php": return <Php className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} />
        case "react": return <FaReact className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} />
        case "gatsby": return <RiGatsbyLine className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} />
        case "powerschool": return <PowerSchool className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} />
        case "wp": return <WordPress className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} />
        default: return <div />;
    }
}

export { IconContainer, IconCard, Icon }

