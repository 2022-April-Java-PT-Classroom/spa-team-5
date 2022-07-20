import { NavLink } from "react-router-dom";
import React from "react";
import style from './style.module.scss';

const Header = () => (
 
    <div className={style.Header}>
      
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong"></link>
      <h1>JAC Enterprises</h1>
      <ul className={style.navList}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/bios'>Bios</NavLink>
          <NavLink to='/books'>Activities</NavLink>
          <NavLink to='/scores'>Scores</NavLink>
          <NavLink to='/art'>Art</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
      </ul>
      
    </div> 
     
)


  export default Header;

