import React from "react";
import style from "./about.module.scss";
import Sarah from "../img/sarahBg.jpg"


export default function About() {


    return (
        <div className={style.about}>
            <div className="about section" >
                <h1 className={style.header}>About</h1>
                <div className="container">
                    <div className={style.section}>
                        <div className={style.text}>
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
            </p>
                        </div>

                        <img className={style.photo} src={Sarah} alt="Piture of Sarah" /></div>
                </div>
            </div>
        </div>


    );
}
