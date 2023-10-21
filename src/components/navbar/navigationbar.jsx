import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './navigationbar.css'
import HomeIcon from "../../assets/icons/navbar/Home-Icon";
import DestaqueIcon from "../../assets/icons/navbar/Destaque-Icon";
import ProfileIcon from "../../assets/icons/navbar/Profile-Icon";
import FaculdadeIcon from "../../assets/icons/navbar/Faculdade-Icon";
import EventosIcon from "../../assets/icons/navbar/Eventos-Icon";



function Navbar(){
    const location = useLocation();

    return(
        <>
            <div className="navbar">
                <div>
                    <Link to='/faculdade'><FaculdadeIcon ativo={location.pathname === '/faculdade'}/></Link>
                    <Link to='/destaque'><DestaqueIcon ativo={location.pathname === '/destaque'}/></Link>
                    <Link to='/'state={{zIndex:2}}><HomeIcon ativo={location.pathname === '/'}/></Link>
                    <Link to='/eventos'><EventosIcon ativo={location.pathname === '/eventos'}/></Link>
                    <Link to='/profile'><ProfileIcon ativo={location.pathname === '/profile'}/></Link>
                    
                    
                </div>
            </div>
        </>
    )
}

export default Navbar;