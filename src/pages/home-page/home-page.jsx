import {React, useState } from "react";
import Navbar from "../../components/navbar/navigationbar";
import './home-page.css'
import Search from "../../assets/icons/search";
import Follow from "../../components/follow/follow";
import MovingComponent from "./teste";

function HomeScreen() {
    return (
        <>
            <body>
                <nav>
                    <div className="search">
                        <Search/>
                        <input type="text" placeholder="Pesquisar" style={{backgroundColor: 'transparent', border: 0, color: 'white', fontSize: 17}}/>
                    </div>
                </nav>
                <div style={{width: '100%',backgroundColor: '#fff2', paddingLeft: 20, display: 'flex', alignItems: 'center'}}>
                    <h1 style={{fontSize: 20, color: 'white'}}>FACULDADES</h1>
                    
                </div>
                <Follow/>
                {/* <MovingComponent/> */}

                <Navbar></Navbar>
            </body>
        </>
    )
}

export default HomeScreen;