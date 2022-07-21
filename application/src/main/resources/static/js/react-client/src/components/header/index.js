import { NavLink } from "react-router-dom";
import React from "react";
import style from './headerStyle.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.section}>
      <title className={style.title}>
      <h1 className={style.title}>JAC Enterprises</h1>
      </title>
      
    
      <nav className={style.navList}>
      <ul className={style.navList}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/bios'>Bios</NavLink>
          <NavLink to='/books'>Activities</NavLink>
          <NavLink to='/scores'>Scores</NavLink>
          <NavLink to='/art'>Art</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
      </ul>
      </nav>
   </div>
      </header>
  );
}
  
export default Header;
