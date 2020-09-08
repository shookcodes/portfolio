
import React from "react";
import style from "../styles/3work.module.scss";

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
        <div className="work">

            <h1 className={style.header}>Work</h1>

            <div className={style.section}>
                <div className={style.text}>
                    <p>
                        Most of my work involves custom Oracle SQL reports and automation using PowerShell and PHP. You can find samples of my work on my <a href="https://github.com/joojaco" target="_blank">Github</a> page.  An example of my front-end development work includes this portfolio, and I will be adding other samples here in the future.
                            </p>
                </div>
            </div>
            <div className={style.section}>
                <IconContainer className={style.section}>
                    <IconCard title="Languages" icons={Languages} />
                    <IconCard title="Frameworks" icons={FrameWorks} />
                    <IconCard title="Platforms" icons={Platforms} />
                </IconContainer>
            </div>

        </div>
    )
}