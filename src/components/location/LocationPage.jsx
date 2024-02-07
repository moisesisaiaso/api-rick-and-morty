/* estilos */
import { useEffect, useState } from "react";
import headerStyles from "../../assets/styles/headerStyles.module.css";
import mainStyles from "../../assets/styles/mainStyles.module.css";

/* función helpers */
import { getRandomBackground } from "../../helpers/fondos.js"; /* imagen */

export const LocationPage = () => {
    /* estado random-Image */
    const [background, setBackground] = useState();

    useEffect(() => {
        setBackground(getRandomBackground());
    }, []);

    return (
        <>
            <header className={headerStyles.container__header}>
                <img src={background} alt="fondos" className={headerStyles.header__background} />

                {/* <FormCharacter setName={setName} setPage={setPage} /> */}
            </header>
            <main className={mainStyles.container__main}>
                {/*  {isLoading ? (
                   <h2 className={mainStyles.main__loading}>LOADING...</h2>
               ) : (
                   <>
                       {exist ? (
                           <>
                               
                               <Pagination info={allCharacters?.info} setPage={setPage} />

                               <section className={mainStyles.main__cards}>
                                   {allCharacters?.results.map((character) => (
                                       <CharacterCard key={character.id} character={character} />
                                   ))}
                               </section>
                               
                               <Pagination info={allCharacters?.info} setPage={setPage} />
                           </>
                       ) : (
                           <h2 className={mainStyles.main__h2}>
                               "{name}" no es el nombre de un personaje existente
                           </h2>
                       )}
                   </>
               )} */}
            </main>
        </>
    );
};
