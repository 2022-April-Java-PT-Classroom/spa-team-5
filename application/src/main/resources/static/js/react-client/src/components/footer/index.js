import React from "react";
import style from './style.module.scss';

const Footer = () => (
    <div className={style.footer}>
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave1"></div>
                
    <small>&copy; WCCI 2022 Team 5</small>
    {/* <ul className={style.socialList}>
        <li><a href="github.io">GitHub</a></li>
        <li><a href="www.linkedin.com">LinkedIn</a></li>
    </ul> */}
    </div>
    )

export default Footer;