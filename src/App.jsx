import { Route, Routes, Navigate } from "react-router-dom";
/* components */
import { CharactersPage } from "./components/chatacter/CharactersPage";
import { EpisodePage } from "./components/episode/EpisodePage";
import { LocationPage } from "./components/location/LocationPage";

/* estilos */
import generalStyles from "./assets/styles/generalStyles.module.css";
import { NavBar } from "./components/NavBar";

function App() {
    return (
        <>
            <section className={generalStyles.container}>
                <NavBar />

                <Routes>
                    <Route path="/" element={<CharactersPage />} />
                    <Route path="episode" element={<EpisodePage />} />
                    <Route path="location" element={<LocationPage />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>

                <footer>
                    <p>&copy; DESARROLLADO POR MOISES ORTIZ GRACIA</p>
                </footer>
            </section>
        </>
    );
}

export default App;
