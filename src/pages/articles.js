import React from "react"
import style from "./articles.module.scss";
//import ArticlePreview from "../../components/articlepreview.js"


export default function ArticleList() {
    return (
        <div>

            <div className="articles section" >
                <h1 className={style.header}>Articles</h1>
                <div className={style.container}>


                </div>
                <div className={style.all}><a>Go to all articles...</a></div>
            </div>
        </div>
    )
}
