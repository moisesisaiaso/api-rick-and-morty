import mainStyles from "../assets/styles/mainStyles.module.css";

export const CharacterCard = ({ character }) => {
    const { image, name, status, species, gender, location, episode } = character;
    const numberOfEpisodes = episode.length;

    let statusColor;
    if (status === "Alive") {
        statusColor = {
            backgroundColor: "rgb(38, 241, 38)",
        };
    } else if (status === "Dead") {
        statusColor = {
            backgroundColor: "red",
        };
    } else {
        statusColor = {
            backgroundColor: "gray",
        };
    }

    return (
        <>
            <article className={mainStyles.cards__card}>
                <img src={image} alt="" className={mainStyles.card__img} loading="lazy" />

                <div className={mainStyles.card__status}>
                    <div className={mainStyles.status__led} style={statusColor}></div>
                    <span className={mainStyles.status__value}>{status} </span>
                </div>

                <section className={mainStyles.card__content}>
                    <h3 className={mainStyles.card__name}>{name}</h3>

                    <div className={mainStyles.card__info}>
                        <ul>
                            <li className={mainStyles.info__liDescription}>Especie</li>
                            <li className={mainStyles.info__liValue}>{species}</li>
                        </ul>
                        <ul>
                            <li className={mainStyles.info__liDescription}>Género</li>
                            <li className={mainStyles.info__liValue}>{gender}</li>
                        </ul>
                        <ul>
                            <li className={mainStyles.info__liDescription}>Ubicación</li>
                            <li className={mainStyles.info__liValue}>{location.name}</li>
                        </ul>
                        <ul>
                            <li className={mainStyles.info__liDescription}>Episodios</li>
                            <li className={mainStyles.info__liValue}>{numberOfEpisodes}</li>
                        </ul>
                    </div>
                </section>
            </article>
        </>
    );
};
