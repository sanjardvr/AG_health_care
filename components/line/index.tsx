import style from './style.module.scss'
import React from "react";

type Props = {
    text : string;
}

export default function Line({ text } : Props){
    return(
        <div className={style.wrapper}>
            <div className={style.title}>{text}</div>
            <div className={style.line} />
        </div>
    )
}