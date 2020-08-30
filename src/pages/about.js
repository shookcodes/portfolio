import React from "react";
import "../styles/global.scss";
import style from "./about.module.scss";

import { IconContainer, IconCard, Icon } from "../components/iconCard.js";

export default function About() {


    return (
        <div>
            <div className="backsplash"></div>
            <div className="about section">
                <h1 className={style.title}>About</h1>
                <div className={style.container}>
                    <div className={style.section + " " + style.text}>
                        <p>
                            My love of technology originally comes from my mom, an artist by
                            day who built her own PCs, enjoyed tinkering with network
                            security, designed on early versions of Adobe Illustrator, and
                            worked at CompUSA (remember those?) so she could benefit from the
                            employer discounts. She passed her fascination in technology to
                            me, and since I was little, I've enjoyed exploring multiple
                            aspects of technology.
            </p>
                        <p>
                            Currently I enjoy automation and getting things to work behind the
                            scenes. This includes building reports in SQL so they can be
                            imported via PowerShell into systems including O365, Adobe
                            Connect, and PowerSchool.
            </p>
                        <p>
                            I recently started my journey in front-end development, and work
                            with Gatsby (and SASS) to deploy static sites.
            </p>
                        <p>
                            I also maintain the WordPress site for an online school, including
                            PHP, HTML, and CSS code updates as needed.
            </p>{" "}
                    </div>

                </div>
            </div>

        </div>
    );
}
