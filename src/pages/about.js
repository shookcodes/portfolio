import React from "react";
import style from "./about.module.scss";
import Sarah from "../img/sarahBg.jpg"

export default function About() {
    return (

        <div className={style.container}>
            <div className="about" >
                <h1 className={style.header}>About</h1>

                <div className={style.section}>
                    <div className={style.text}>
                        <p>
                            I'm a web developer currently based in Texas. When I'm not chasing my kids, I enjoy coding and digging into technology.
                            </p>
                        <p>
                            I like to automate processes and get things working behind the
                            scenes. This includes building reports in SQL so they can be
                            imported via PowerShell into systems including O365, Adobe
                            Connect, and PowerSchool.
            </p>
                        <p>
                            I currently freelance, helping build Gatsby sites with Prismic CMS (and GraphQL).
            </p>
                        <p>
                            In my previous role, I maintained a WordPress site for a non-profit organization, with code updates including PHP, HTML, and CSS.
            </p>
                    </div>

                    <img className={style.photo} src={Sarah} alt="Headshot of Sarah" /></div>
            </div>
        </div>


    );
}
