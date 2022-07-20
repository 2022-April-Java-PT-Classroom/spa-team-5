import React from "react";
import style from './footerStyle.module.scss';

const Footer = () => {
    return (
    <div className={style.footer}>
    <small>&copy; WCCI 2022 Team 5</small>
    <ul className={style.socialList}>
        <li>GitHub</li>
        <li>LinkedIn</li>
    </ul>
    </div>
    );
}

export default Footer;