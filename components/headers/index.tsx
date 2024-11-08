import React from "react";
import MainHeader from "./mainHeader";
import MobileHeader from "./mobileHeader";
import style from './style.module.scss'

export default function HeaderContainer(){
    return(
        <React.Fragment>
        <div className={style.desktop}>
          <MainHeader/>
        </div>
        <div className={style.mobile}>
          <MobileHeader/>
        </div>
      </React.Fragment>
    )
}