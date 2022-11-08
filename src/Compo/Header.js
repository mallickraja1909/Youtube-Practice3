import React from 'react'
// import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import "../Styles/Header.scss";
const Header = () => {
  return (
   <nav>
    <h2>Rjs Support</h2>
    <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
            
        <HashLink to={"/service"}>Services</HashLink>
        <HashLink to={"/contact"}>Contact</HashLink>
    </main>
   </nav>
  )
}

export default Header;