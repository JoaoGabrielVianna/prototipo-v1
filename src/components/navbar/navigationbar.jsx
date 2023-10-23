import { React, useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import './navigationbar.css'
import HomeIcon from "../../assets/icons/navbar/Home-Icon";
import DestaqueIcon from "../../assets/icons/navbar/Destaque-Icon";
import ProfileIcon from "../../assets/icons/navbar/Profile-Icon";
import FaculdadeIcon from "../../assets/icons/navbar/Faculdade-Icon";
import EventosIcon from "../../assets/icons/navbar/Eventos-Icon";


function Navbar() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const storedPosition = JSON.parse(localStorage.getItem('circlePosition'));
        if (storedPosition) {
        setPosition(storedPosition);
        }
        else {
            // Defina uma posição padrão se o localStorage estiver vazio
            setPosition({ x: 0, y: 0 });
        }
    }, []);

    const moveCircle = (x, y) => {
        const newPosition = { x, y };
        setPosition(newPosition);
        localStorage.setItem('circlePosition', JSON.stringify(newPosition));
    };
    const location = useLocation();



    return (
        <>
            <div className="navbar">
                <div className="section">
                <div className="circle" style={{ transform: `translate(${position.x}px, ${position.y}px)`, width: 90, height: 90, borderRadius: 100, border: '3px solid white', backgroundColor: '#0A121E', transition: 'transform 1s', zIndex: 0, position: 'absolute', display: 'flex', alignItems: 'flex-end'}}></div>
                    <div style={{width: '100%', height: '99%', backgroundColor: '#0A121E', position: 'absolute'}}></div>
                    <div className="icon">
                        <Link to='/faculdade' onClick={() => moveCircle(-140,0)}><FaculdadeIcon ativo={location.pathname === '/faculdade'} /></Link>
                    </div>
                    <div className="icon">
                        <Link to='/destaque' onClick={() => moveCircle(-70,0)}><DestaqueIcon ativo={location.pathname === '/destaque'} /></Link>
                    </div>

                    <div className="icon">
                        <Link to='/' onClick={() => moveCircle(0,0)}><HomeIcon ativo={location.pathname === '/'} /></Link>
                    </div>

                    <div className="icon">
                        <Link to='/eventos' onClick={() => moveCircle(70,0)}><EventosIcon ativo={location.pathname === '/eventos'} /></Link>
                    </div>

                    <div className="icon">
                        <Link to='/profile' onClick={() => moveCircle(140,0)}><ProfileIcon ativo={location.pathname === '/profile'} /></Link>
                    </div>
                </div>
                

            </div>
        </>
    )
}

export default Navbar;