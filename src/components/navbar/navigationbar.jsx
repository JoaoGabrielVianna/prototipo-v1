import React, {useState} from "react";
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
        { componente: <DestaqueIcon ativo={location.pathname === '/destaque'} />, local: '/destaque', pX: 10 },
        { componente: <HomeIcon ativo={location.pathname === '/'} />, local: '/', pX: 20 },
        { componente: <EventosIcon ativo={location.pathname === '/eventos'} />, local: '/eventos', pX: 30 },
        { componente: <ProfileIcon ativo={location.pathname === '/profile'} />, local: '/profile', pX: 40 },
    ]

    const [position, setPosition] = useState(0);

    const changeScreen = ({x}) => {
        setPosition(x)
    }

    return (
        <><Indicator positionX={position}/>
        <div className="navbar">
            
            <div className="section">
                
                {icons.map((icon, index) => (
                    <div key={index} className="icon" style={{height: '100%', width: '100%'}} onClick={() => {changeScreen(icon.pX), console.log(icon.pX)}}>
                        <Link to={icon.local}>{icon.componente}</Link>
                        
                    </div>
                ))}
            
            </div>
            
        </div>
        </>
    )
}

export default Navbar;
