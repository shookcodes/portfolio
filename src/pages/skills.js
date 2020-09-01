
import React from "react";
import "../styles/global.scss";
import style from "./skills.module.scss";

import { IconContainer, IconCard, Icon } from "../components/iconCard.js";

export default function Skills() {
    const Languages = [
        <Icon name="powershell" alt="PowerShell" />,
        <Icon name="html5" color="#e44d26" alt="HTML 5" />,
        <Icon name="css3" color="#2299F8" alt="CSS 3" />,
        <Icon name="js" color="#D6BC2B" alt="JavaScript" />,
        <Icon name="sql" color="#DE1F13" alt="SQL" />,
        <Icon name="php" color="#6082BB" alt="PHP" />,
    ];

    const FrameWorks = [
        <Icon name="react" color="#53C1DE" alt="React" />,
        <Icon name="gatsby" color="#633194" alt="Gatsby" />,
    ];

    const Platforms = [
        <Icon name="wp" color="#21759B" alt="Wordpress" />,
        <Icon name="powerschool" color="#21759B" alt="PowerSchool" />,
    ];


    return (
        <div className="skills section">

            <h1 className={style.header}>Skills</h1>
            <div >
                <div className="container">
                    <IconContainer className={style.section}>
                        <IconCard title="Languages" icons={Languages} />
                        <IconCard title="Frameworks" icons={FrameWorks} />
                        <IconCard title="Platforms" icons={Platforms} />
                    </IconContainer>
                </div>
            </div>
        </div>
    )
}