/* estilos */
import generalStyles from "../src/assets/styles/generalStyles.module.css";
import headerStyles from "../src/assets/styles/headerStyles.module.css";
import mainStyles from "../src/assets/styles/mainStyles.module.css";

/* imagenes */
import rickAndMorty from "../src/assets/img/icons/nombre-white.png";
import logo from "../src/assets/img/icons/rick-morty.png";

/* función helpers */
import { getRandomBackground } from "./helpers/fondos.js";

/* components */
import { FormCharacter } from "./components/chatacter/FormCharacter.jsx";
import { CharacterCard } from "./components/CharacterCard.jsx";
import { Pagination } from "./components/Pagination.jsx";

/* hooks */
import { useState } from "react";
import { useEffect } from "react";
import { useFetchAllCharacter } from "./hooks/useFetchAllCharacter";

function App() {
    const randomPage = Math.floor(Math.random() * 41 + 1);
    const [page, setPage] = useState(randomPage);
    const [name, setName] = useState();
    const [status, setStatus] = useState();
    const [specie, setSpecie] = useState();
    const [gender, setGender] = useState();
    const [allCharacters, setAllCharacters] = useFetchAllCharacter();
    const [background, setBackground] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [exist, setExist] = useState(true);

    const handleAccess = async () => {
        const result = await setAllCharacters(name, status, specie, gender, page);
        const { isLoading, exist } = result;

        setExist(exist);
        setIsLoading(isLoading);
    };

    useEffect(() => {
        const randomBackground = getRandomBackground();
        setBackground(randomBackground);
        handleAccess();
        setIsLoading(true);
    }, [page, name, status, specie, gender]);

    console.log(allCharacters);

    console.log("hola", name);

    return (
        <>
            <section className={generalStyles.container}>
                <header className={headerStyles.container__header}>
                    <img
                        src={background}
                        alt="fondos"
                        className={headerStyles.header__background}
                    />

                    <div className={headerStyles.header__nav}>
                        <img src={rickAndMorty} alt="logo" className={headerStyles.nav__logo} />

                        <ul className={headerStyles.nav__list}>
                            <li>Characters</li>
                            <li>Episode</li>
                            <li>Location</li>
                        </ul>
                    </div>
                    <FormCharacter setName={setName} setPage={setPage} />
                </header>

                <main className={mainStyles.container__main}>
                    {isLoading ? (
                        <h2 className={mainStyles.main__loading}>LOADING...</h2>
                    ) : (
                        <>
                            {exist ? (
                                <>
                                    {/* paginación */}
                                    <Pagination info={allCharacters?.info} setPage={setPage} />

                                    <section className={mainStyles.main__cards}>
                                        {allCharacters?.results.map((character) => (
                                            <CharacterCard
                                                key={character.id}
                                                character={character}
                                            />
                                        ))}
                                    </section>
                                    {/* paginación */}
                                    <Pagination info={allCharacters?.info} setPage={setPage} />
                                </>
                            ) : (
                                <h2>"{name}" no es el nombre de un personaje existente</h2>
                            )}
                        </>
                    )}
                </main>

                <footer>
                    <p>&copy; DESARROLLADO POR MOISES ORTIZ GRACIA</p>
                </footer>
            </section>
        </>
    );
}

export default App;
