import { Link, NavLink } from "react-router-dom";

/* imagenes */
import rickAndMorty from "../assets/img/icons/nombre-white.png";
import menuHamburgesa from "../assets/img/icons/menu-bar.png";

/* estilos */
import headerStyles from "../assets/styles/headerStyles.module.css";
/* hooks */
import { useState } from "react";
export const NavBar = () => {
    const [navList, setNavList] = useState(false);

    const onHandleOpenMenu = () => {
        setNavList(true);
    };

    const onHandleExitMenu = () => {
        setNavList(false);
    };
    return (
        <>
            <div className={headerStyles.header__nav}>
                <Link to="/">
                    <img src={rickAndMorty} alt="logo" className={headerStyles.nav__logo} />
                </Link>
                {/* Link es un componente que me permite renderizar solo las partes que cambian sin recargar el sitio, es decir utiliza el DOM virtual */}

                <ul
                    className={headerStyles.nav__list + " " + `${navList && headerStyles.enable}`}
                    onClick={onHandleExitMenu}
                >
                    <NavLink
                        className={({ isActive }) =>
                            headerStyles.route + " " + `${isActive && headerStyles.active} `
                        }
                        to="/"
                    >
                        Characters
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            headerStyles.route + " " + `${isActive && headerStyles.active} `
                        }
                        to="location"
                    >
                        Location
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            headerStyles.route + " " + `${isActive && headerStyles.active} `
                        }
                        to="episode"
                    >
                        Episode
                    </NavLink>
                </ul>

                <div
                    className={headerStyles.nav__menu + " " + `${navList && headerStyles.disable}`}
                    onClick={onHandleOpenMenu}
                >
                    <img src={menuHamburgesa} alt="menu" />
                </div>
            </div>
        </>
    );
};
