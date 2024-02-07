import { Route, Routes } from "react-router-dom";
import { CharactersPage } from "./components/chatacter/CharactersPage";
import { EpisodePage } from "./components/episode/EpisodePage";
import { LocationPage } from "./components/location/LocationPage";
/* imagenes */
import rickAndMorty from "./assets/img/icons/nombre-white.png";
/* estilos */
import generalStyles from "./assets/styles/generalStyles.module.css";
import headerStyles from "./assets/styles/headerStyles.module.css";

function App() {
    return (
        <>
            <section className={generalStyles.container}>
                <div className={headerStyles.header__nav}>
                    <img src={rickAndMorty} alt="logo" className={headerStyles.nav__logo} />

                    <ul className={headerStyles.nav__list}>
                        <li>Characters</li>
                        <li>Episode</li>
                        <li>Location</li>
                    </ul>
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
