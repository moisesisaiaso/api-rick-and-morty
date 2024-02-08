import { Link, NavLink } from "react-router-dom";

/* imagenes */
import rickAndMorty from "../assets/img/icons/nombre-white.png";
import menuHamburgesa from "../assets/img/icons/menu-bar.png";

/* estilos */
import headerStyles from "../assets/styles/headerStyles.module.css";
/* hooks */
import { useState } from "react";
export const NavBar = () => {
    const [navMenu, setNavMenu] = useState();
    const [navList, setNavList] = useState();
    const onHandleOpenMenu = () => {
        const navListStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
        };

        setNavList(navListStyle);

        const navMenuStyle = {
            display: "none",
        };

        setNavMenu(navMenuStyle);
    };

    const onHandleExitMenu = () => {
        const anchoPantalla = document.documentElement.clientWidth;
        console.log("pantalla", anchoPantalla);
        if (anchoPantalla < "600") {
            const navListStyle = {
                display: "none",
            };
            setNavList(navListStyle);

            const navMenuStyle = {
                display: "block",
            };

            setNavMenu(navMenuStyle);
        }
    };
    return (
        <>
            <div className={headerStyles.header__nav}>
                <Link to="/">
                    <img src={rickAndMorty} alt="logo" className={headerStyles.nav__logo} />
                </Link>
                {/* Link es un componente que me permite renderizar solo las partes que cambian sin recargar el sitio, es decir utiliza el DOM virtual */}

                <ul className={headerStyles.nav__list} style={navList} onClick={onHandleExitMenu}>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? ` ${headerStyles.route__active} `
                                : ` ${headerStyles.route__inactive} `
                        }
                        to="/"
                    >
                        Characters
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? ` ${headerStyles.route__active} `
                                : ` ${headerStyles.route__inactive} `
                        }
                        to="location"
                    >
                        Location
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? ` ${headerStyles.route__active} `
                                : ` ${headerStyles.route__inactive} `
                        }
                        to="episode"
                    >
                        Episode
                    </NavLink>
                </ul>

                <div className={headerStyles.nav__menu} style={navMenu} onClick={onHandleOpenMenu}>
                    <img src={menuHamburgesa} alt="menu" />
                </div>
            </div>
        </>
    );
};
