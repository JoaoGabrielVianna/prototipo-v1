import React from "react";
import Navbar from "../../components/navbar/navigationbar";
import './home-page.css'
import Search from "../../assets/icons/search";

function HomeScreen() {
    return (
        <>
            <body>
                <nav>
                    <div className="search">
                        <Search/>
                        <input type="text" placeholder="Pesquisar" style={{backgroundColor: 'transparent', border: 0, color: 'white'}}/>
                    </div>
                </nav>
                {/* <h1>PAGINA HOME</h1> */}
                <Navbar><div style={{ width: 100, height: 100, backgroundColor: 'green' }} /></Navbar>
            </body>
        </>
    )
}

export default HomeScreen;