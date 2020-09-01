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
            <h3 className={style.header}>{props.title}</h3>
            <span className={style.iconList}>{props.icons}</span>
        </div>

    )

};

const Icon = props => {
    switch (props.name) {
        case "powershell": return <span className={style.iconSpan}><PowerShell className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} />
            <span className={style.iconText}>PowerShell</span></span>
        case "html5": return <span className={style.iconSpan}><FaHtml5 className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} /><span className={style.iconText}>HTML5</span></span>
        case "css3": return <span className={style.iconSpan}><FaCss3Alt className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} /><span className={style.iconText}>CSS3</span></span>
        case "js": return <span className={style.iconSpan}><IoLogoJavascript className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} /><span className={style.iconText}>JavaScript</span></span>
        case "sql": return <span className={style.iconSpan}><AiOutlineConsoleSql className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} /><span className={style.iconText}>SQL</span></span>
        case "php": return <span className={style.iconSpan}><Php className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} /><span className={style.iconText}>PHP</span></span>
        case "react": return <span className={style.iconSpan}><FaReact className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} /><span className={style.iconText}>React</span></span>
        case "gatsby": return <span className={style.iconSpan}><RiGatsbyLine className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} /><span className={style.iconText}>Gatsby</span></span>
        case "powerschool": return <span className={style.iconSpan}><PowerSchool className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} /><span className={style.iconText}>PowerSchool</span></span>
        case "wp": return <span className={style.iconSpan}><WordPress className={style.icon} id={props.id} style={{ color: `${props.color}` }} alt={props.alt} /><span className={style.iconText}>WordPress</span></span>
        default: return <div />;
    }
}

export { IconContainer, IconCard, Icon }

