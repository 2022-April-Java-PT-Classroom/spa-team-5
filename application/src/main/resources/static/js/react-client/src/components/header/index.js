import { NavLink } from "react-router-dom";
import React from "react";
import style from './style.module.scss';

const Header = () => (
    <div className={style.Header}> 
      <h1>JAC Enterprises</h1>
      <ul className={style.navList}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/bios'>Bios</NavLink>
          <NavLink to='/books'>Books</NavLink>
          <NavLink to='/scores'>Scores</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
      </ul>
    </div> 
  )
  
  export default Header;
