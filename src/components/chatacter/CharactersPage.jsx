/* estilos */
import headerStyles from "../../assets/styles/headerStyles.module.css";
import mainStyles from "../../assets/styles/mainStyles.module.css";

/* imagenes */

/* función helpers */
import { getRandomBackground } from "../../helpers/fondos.js"; /* imagen */

/* components */
import { FormCharacter } from "./FormCharacter.jsx";
import { CharacterCard } from "../CharacterCard.jsx";
import { Pagination } from "../Pagination.jsx";

/* hooks */
import { useState, useEffect } from "react";
import { useFetchAllCharacter } from "../../hooks/useFetchAllCharacter";

export const CharactersPage = () => {
    /* estado random-Image */
    const [background, setBackground] = useState();
    /* estado  random-page*/
    const randomPage = Math.floor(Math.random() * 41 + 1);
    const [page, setPage] = useState(randomPage);
    /* estado de busqueda-por-nombre */
    const [name, setName] = useState();
    /* estados para filtros */
    const [status, setStatus] = useState();
    const [specie, setSpecie] = useState();
    const [gender, setGender] = useState();
    /* custon Hooks */
    const [allCharacters, setAllCharacters] = useFetchAllCharacter();
    /* estados de acceso */
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
            <header className={headerStyles.container__header}>
                <img src={background} alt="fondos" className={headerStyles.header__background} />

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
                                        <CharacterCard key={character.id} character={character} />
                                    ))}
                                </section>
                                {/* paginación */}
                                <Pagination info={allCharacters?.info} setPage={setPage} />
                            </>
                        ) : (
                            <h2 className={mainStyles.main__h2}>
                                "{name}" no es el nombre de un personaje existente
                            </h2>
                        )}
                    </>
                )}
            </main>
        </>
    );
};
