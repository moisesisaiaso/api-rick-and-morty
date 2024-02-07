import { Route, Routes } from "react-router-dom";
import { CharactersPage } from "./components/chatacter/CharactersPage";
import { EpisodePage } from "./components/episode/EpisodePage";
import { LocationPage } from "./components/location/LocationPage";
/* imagenes */
import rickAndMorty from "./assets/img/icons/nombre-white.png";
import menuHamburgesa from "./assets/img/icons/menu-bar.png";
/* estilos */
import generalStyles from "./assets/styles/generalStyles.module.css";
import headerStyles from "./assets/styles/headerStyles.module.css";
import { useState } from "react";

function App() {
    const [navMenu, setNavMenu] = useState();
    const handleMenu = () => {
        const navStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
        };

        setNavMenu(navStyle);
    };

    const handleMenuExit = () => {
        const containerStyle = {
            display: "none",
        };

        setNavMenu(containerStyle);
    };

    return (
        <>
            <section className={generalStyles.container}>
                <div className={headerStyles.header__nav}>
                    <img src={rickAndMorty} alt="logo" className={headerStyles.nav__logo} />

                    <ul className={headerStyles.nav__list} style={navMenu} onClick={handleMenuExit}>
                        <li>Characters</li>
                        <li>Episode</li>
                        <li>Location</li>
                    </ul>
                    <div className={headerStyles.nav__menu} onClick={handleMenu}>
                        <img src={menuHamburgesa} alt="menu" />
                    </div>
                </div>

                <Routes>
                    <Route path="/" element={<CharactersPage />} />
                    <Route path="episode" element={<EpisodePage />} />
                    <Route path="location" element={<LocationPage />} />
                </Routes>

                <footer>
                    <p>&copy; DESARROLLADO POR MOISES ORTIZ GRACIA</p>
                </footer>
            </section>
        </>
    );
}

export default App;
