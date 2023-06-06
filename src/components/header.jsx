import React from "react";
import '../styles/header.css'
import Button from "./Button";

function Header(){
    return(
        <div className="header">
            <div className="logo"><img src="../public/logo.svg" alt="" /></div>
            <div className="links"><a href="">Home</a><a href="">About</a><a href="">Contact</a> <a href="">Blog</a><a href="">Careers</a></div>
            <div className="btn">
                <Button/>
            </div>
        </div>
    )
}

export default Header;