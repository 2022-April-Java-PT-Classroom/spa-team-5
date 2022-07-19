import {faGithub, faReact} from '@fortawesome/free-brands-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from "react";
import style from './style.module.scss';
import waves from '../../assets/wave.png'

const Footer = () => (
    <div className={style.footer}>
         <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong"></link>
        <div className={style.wave}>
            <img src={waves} alt='waves'/>
        </div>
        <div className={style.footer2}>       
            <small>&copy; WCCI 2022  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Team 5  <FontAwesomeIcon icon={faReact}></FontAwesomeIcon></small>
            
        </div>
        
    </div>
    )

export default Footer;