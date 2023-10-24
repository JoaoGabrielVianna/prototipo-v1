import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './navigationbar.css';
import HomeIcon from "../../assets/icons/navbar/Home-Icon";
import DestaqueIcon from "../../assets/icons/navbar/Destaque-Icon";
import ProfileIcon from "../../assets/icons/navbar/Profile-Icon";
import FaculdadeIcon from "../../assets/icons/navbar/Faculdade-Icon";
import EventosIcon from "../../assets/icons/navbar/Eventos-Icon";
import Indicator from "./indicator";

function Navbar() {
    const location = useLocation();
    const icons = [
        { componente: <FaculdadeIcon ativo={location.pathname === '/faculdade'} />, local: '/faculdade', pX: -7 },
        { componente: <DestaqueIcon ativo={location.pathname === '/destaque'} />, local: '/destaque', pX: 63 },
        { componente: <HomeIcon ativo={location.pathname === '/'} />, local: '/', pX: 135 },
        { componente: <EventosIcon ativo={location.pathname === '/eventos'} />, local: '/eventos', pX: 207 },
        { componente: <ProfileIcon ativo={location.pathname === '/profile'} />, local: '/profile', pX: 277 },
    ]

    const [position, setPosition] = useState(null); // Inicialize a posição como null

    const changeScreen = (x) => {
        if (position === x) {
            setPosition(null); // Se a posição atual for igual à posição clicada, defina como null
        } else {
            setPosition(x); // Caso contrário, defina como a posição clicada
        }
    }

    return (
        <>
            <div className="navbar">
                <Indicator positionX={position} />
                <div className="section">
                    {icons.map((icon, index) => (
                        <div key={index} className="icon" style={{ height: '100%', width: '100%' }}>
                            <Link to={icon.local} onClick={() => changeScreen(icon.pX)}>{icon.componente}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Navbar;
